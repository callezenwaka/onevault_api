// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

library Utils {

  /* @dev Does a byte-by-byte lexicographical comparison of two strings.
  * @param stringA item string.
  * @param stringB item string.
  * @return a true number if `stringA` is equal to `stringB`, false if otherwise
  */
  function isEqual(string memory stringA, string memory stringB) 
  public 
  pure 
  returns(bool) 
  {
    // Compare string keccak256 hashes to check equality
    if (keccak256(abi.encodePacked(stringA)) == keccak256(abi.encodePacked(stringB))) {
      return true;
    }
    return false;
  }
}