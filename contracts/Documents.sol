// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

import "./Accounts.sol";

/** @title Documents. */
contract Documents {
  // state variables
  Document[] private documents;
  address payable private owner;
  address public accountsAddress;
  mapping (address => Count) private counts;
  mapping (address => uint) public balances;
  enum Status { PENDING, CERTIFIED, DECLINED, VERIFIED, REJECTED }
 
  struct Document {
    address requester;
    address verifier;
    address certifier;
    string name;
    string imageURL;
    uint fee;
    uint index;
    Status status;
  }
   
  struct Count {
    uint pending;
    uint certified;
    uint declined;
    uint verified;
    uint rejected;
    uint total;
  }

  event DocumentAdded(address user);
  event DocumentCertified(address user);
  event DocumentVerified(address user);
  event DocumentRejected(address user);
  event DocumentTested (uint test);

  /** @dev check for document address exists.
    * @param _index document index.
    */
  modifier documentExists(uint _index) {
    require(documents[_index].index == _index, "Document not found");
    _;
  }

  /** @dev check for document address exists.
    * @param _address account address.
    */
  modifier documentsExist(address _address) {
    require(counts[_address].total > 0, "Documents not found");
    _;
  }

  /** @dev check for admin account.
    * @param _address user address.
    */
  modifier isAdmin(address _address) {
    require(Accounts(accountsAddress).getAccount(_address).affiliate != address(0), "Unauthorised Access");
    require(Accounts(accountsAddress).getAccount(_address).affiliate != msg.sender, "Unauthorised admin");
    _;
  }

  /** @dev check for user paid enough.
    * @param _fee user fee.
    */
  modifier paidEnough(uint _fee) { 
    require(msg.value >= _fee, "Insufficient fund");
    _;
  }

  /** @dev refund extra amount sent.
    * @param addr user address.
    */
  modifier refund(address addr, uint _fee) {
    //refund extra ether received
    _;
    uint amountToRefund = msg.value - _fee;
    if(amountToRefund > 0){
      payable(msg.sender).transfer(amountToRefund);
      balances[addr] += _fee;
    }
  }

  /** @dev check for contract owner.
  */
  modifier onlyOwner {
    require(msg.sender == owner, "Only owner can call.");
    _;
  }

  constructor(address acctAddr) {
    owner = payable(msg.sender);
    accountsAddress = acctAddr;
  }
  
  /** @dev add document.
    * @param _certifier document address.
    * @param _verifier document address.
    * @param _name document name.
    * @param _fee document fee.
    */
  function addDocument(address _certifier, address _verifier, string memory _name, uint _fee) 
  public 
  payable
  paidEnough(_fee)
  refund(_certifier, _fee)
  returns(bool success)
  {
    // TODO: Add document
    emit DocumentAdded(msg.sender);
    documents.push(
      Document({
        verifier: _verifier,
        certifier: _certifier,
        requester: msg.sender,
        name: _name,
        imageURL: "",
        index: documents.length,
        fee: _fee,
        status: Status.PENDING
      })
    );
    // TODO: Update document counts
    counts[msg.sender].pending += 1;
    counts[_certifier].pending += 1;
    counts[_verifier].pending += 1;
    counts[msg.sender].total += 1;
    counts[_certifier].total += 1;
    counts[_verifier].total += 1;
    return true;
  }

  /** @dev get documents.
    * @param _address account address.
    * @return _documents document.
    */  
  function getDocuments(address _address) 
  public 
  view
  documentsExist(_address)
  returns (Document[] memory) {
    // TODO: Get documents
    uint index = 0;
    uint count = counts[_address].total;
    Document[] memory items = new Document[](count);
    for (uint i=0; i<documents.length; i++) {
      if(documents[i].requester == msg.sender) {
        Document storage document = documents[i];
        items[index] = document;
        index++;
        continue;
      }
      if(documents[i].verifier == _address) {
        Document storage document = documents[i];
        items[index] = document;
        index++;
        continue;
      }
      if(documents[i].certifier == _address) {
        Document storage document = documents[i];
        items[index] = document;
        index++;
        continue;
      }
    }
    return items;
  }

  /** @dev get document.
    * @param _index document uint.
    * @return _document document.
    */
  function getDocument(uint _index) 
  public 
  view
  documentExists(_index)
  returns(Document memory)
  {
    // TODO: Get document
    Document memory item;
    if(documents[_index].requester == msg.sender) {
      Document storage document = documents[_index];
      return item = document;
    }
    if(documents[_index].verifier == Accounts(accountsAddress).getAccount(msg.sender).affiliate) {
      Document storage document = documents[_index];
      return item = document;
    }
    if(documents[_index].certifier == Accounts(accountsAddress).getAccount(msg.sender).affiliate) {
      Document storage document = documents[_index];
      return item = document;
    }
    return item;
  }

  /** @dev update document.
    * @param _imageURL document address.
    * @param _index document index.
    * @param status document status.
    */
  function updateDocument(string memory _imageURL, uint _index, Status status) 
  public 
  payable
  isAdmin(msg.sender)
  returns(bool)
  {
    // TODO: Certify document
    if(documents[_index].verifier == Accounts(accountsAddress).getAccount(msg.sender).affiliate && documents[_index].status == Status.CERTIFIED){
      documents[_index].status = status;
      if(status == Status.VERIFIED){
        emit DocumentVerified(msg.sender);
        counts[documents[_index].requester].verified += 1;
        counts[documents[_index].certifier].verified += 1;
        counts[documents[_index].verifier].verified += 1;
        counts[documents[_index].requester].certified -= 1;
        counts[documents[_index].certifier].certified -= 1;
        counts[documents[_index].verifier].certified -= 1;
        return true;
      }
      if(status == Status.REJECTED) {
        emit DocumentRejected(msg.sender);
        counts[documents[_index].requester].rejected += 1;
        counts[documents[_index].certifier].rejected += 1;
        counts[documents[_index].verifier].rejected += 1;
        counts[documents[_index].requester].certified -= 1;
        counts[documents[_index].certifier].certified -= 1;
        counts[documents[_index].verifier].certified -= 1;
        return true;
      }
    }

    if(documents[_index].certifier == Accounts(accountsAddress).getAccount(msg.sender).affiliate && documents[_index].status == Status.PENDING){
      documents[_index].status = status;
      documents[_index].imageURL = _imageURL;
      if(status == Status.CERTIFIED){
        emit DocumentCertified(msg.sender);
        counts[documents[_index].requester].certified += 1;
        counts[documents[_index].certifier].certified += 1;
        counts[documents[_index].verifier].certified += 1;
        counts[documents[_index].requester].pending -= 1;
        counts[documents[_index].certifier].pending -= 1;
        counts[documents[_index].verifier].pending -= 1;
        return true;
      }
      if(status == Status.REJECTED) {
        uint fee = documents[_index].fee;
        emit DocumentRejected(msg.sender);
        counts[documents[_index].requester].declined += 1;
        counts[documents[_index].certifier].declined += 1;
        counts[documents[_index].verifier].declined += 1;
        counts[documents[_index].requester].pending -= 1;
        counts[documents[_index].certifier].pending -= 1;
        counts[documents[_index].verifier].pending -= 1;
        // return the ether for rejection
        balances[documents[_index].certifier] -= fee;
        payable(documents[_index].requester).transfer(fee);
        return true;
      }
    }
    return true;
  }
  
  /** @dev get count for users.
    * @param _address user address.
    * @return total count total.
    */ 
  function getMetrics (address _address) 
  public 
  view
  returns(uint, uint, uint, uint, uint, uint) 
  {
    // TODO: Get document counts
    return (counts[_address].pending, counts[_address].certified, counts[_address].declined, counts[_address].verified, counts[_address].rejected, counts[_address].total);
  }

  /** @dev kill smart contract if something bad happens.
    */
  function kill() 
  public
  payable
  onlyOwner
  {
    selfdestruct(owner);
  }
}