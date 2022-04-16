import { expect } from "chai";
import { ethers } from "hardhat";

describe("Documents", async function () {
  let utils: any;
  let accounts: any;
  let documents: any;
  // Args
  const displayName: string = 'John Doe';
  const phoneNumber: string = '+2348033330000';
  const email: string = 'john.doe@mail.com';
  const photoURL: string = 'photoURL';
  const role: string = 'role';
  const name: string = 'Transcript';
  const isActive: boolean = true;
  const isActivated: boolean = true;
  const fee: number = 1;
  const index: number = 0;
  const status: number = 1;
  const imageURL: string = 'https://i.pinimg.com/736x/8a/8d/e9/8a8de9aa2e54526fecb40182e510e856.jpg';
  const adminUser: string = 'Jane Doe';
  const adminRole: string = 'Admin';

  before(async () => {
    const Utils = await ethers.getContractFactory("Utils");
    utils = await Utils.deploy();
    await utils.deployed();
    console.log("Utils deployed to:", utils.address);

    const Accounts = await ethers.getContractFactory("Accounts", {
      libraries: {
        Utils: utils.address,
      },
    });
    accounts = await Accounts.deploy();
    await accounts.deployed();
    console.log("Accounts deployed to:", accounts.address);

    const Documents = await ethers.getContractFactory("Documents");
    documents = await Documents.deploy(accounts.address);
    await documents.deployed();
    console.log("Documents deployed to:", documents.address);
  });

  it("Should add new document", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const result = await accounts.connect(addr1).addAccount(addr1.address, addr1.address, displayName, email, phoneNumber, photoURL, role, isActive, isActivated);
    await result.wait();

    const document = await documents.connect(addr1).addDocument(addr2.address, addr3.address, name, fee, { value: 1 });
    const res = await document.wait();

    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(documents.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
  });

  it("Should return a user documents", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await documents.connect(addr1).getDocuments(addr1.address);
    
    expect(res).to.be.an('array').that.is.not.empty;
    expect(res[0].requester).to.equal(addr1.address);
    expect(res[0].certifier).to.equal(addr2.address);
    expect(res[0].verifier).to.equal(addr3.address);
    expect(res[0].name).to.equal(name);
    expect(res[0].imageURL).to.equal('');
    expect(res[0].fee).to.equal(fee);
    expect(res[0].index).to.equal(0);
    expect(res[0].status).to.equal(0);
  });

  it("Should return a user document", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await documents.connect(addr1).getDocument(0);

    expect(res).to.be.an('array').that.is.not.empty;
    expect(res.requester).to.equal(addr1.address);
    expect(res.certifier).to.equal(addr2.address);
    expect(res.verifier).to.equal(addr3.address);
    expect(res.name).to.equal(name);
    expect(res.imageURL).to.equal('');
    expect(res.fee).to.equal(fee);
    expect(res.index).to.equal(0);
    expect(res.status).to.equal(0);
  });

  it("Should update a user document", async function () {
    const [owner, addr1, addr2, addr3, addr4] = await ethers.getSigners();

    const account = await accounts.connect(addr2).addAccount(addr4.address, addr2.address, adminUser, email, phoneNumber, photoURL, adminRole, isActive, isActivated);
    const acc = await account.wait();

    const result = await documents.connect(addr4).updateDocument(imageURL, index, status);
    const response = await result.wait();

    expect(response.from).to.equal(addr4.address);
    expect(response.to).to.equal(documents.address);
    expect(response.contractAddress).to.equal(null);
    expect(response.transactionIndex).to.equal(0);

    const res = await documents.connect(addr4).getDocument(0);

    expect(res).to.be.an('array').that.is.not.empty;
    expect(res.imageURL).to.equal(imageURL);
    expect(res.status).to.equal(status);
  });

  it("Should return a user documents", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await documents.connect(addr1).getDocuments(addr1.address);

    expect(res).to.be.an('array').that.is.not.empty;
    expect(res[0].requester).to.equal(addr1.address);
    expect(res[0].certifier).to.equal(addr2.address);
    expect(res[0].verifier).to.equal(addr3.address);
    expect(res[0].name).to.equal(name);
    expect(res[0].imageURL).to.equal(imageURL);
    expect(res[0].fee).to.equal(fee);
    expect(res[0].index).to.equal(0);
    expect(res[0].status).to.equal(1);
  });

  it("Should return a user document metrics", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await documents.connect(addr1).getMetrics(addr1.address);

    expect(res[0]).to.equal(0);
    expect(res[1]).to.equal(1);
    expect(res[2]).to.equal(0);
    expect(res[3]).to.equal(0);
    expect(res[4]).to.equal(0);
    expect(res[5]).to.equal(1);
  });
});
