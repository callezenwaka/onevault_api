import { expect } from "chai";
import { ethers } from "hardhat";

describe("Documents", async function () {
  let utils: any;

  before(async () => {

    const Utils = await ethers.getContractFactory("Utils");
    utils = await Utils.deploy();
    await utils.deployed();
    console.log("Utils deployed to:", utils.address);
  });

  it("Should compare and return boolean result", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const result1 = await utils.isEqual(addr1.address, addr1.address);
    const result2 = await utils.isEqual(addr1.address, addr2.address);

    expect(result1).to.equal(true);
    expect(result1).to.be.a('boolean');
    expect(result2).to.equal(false);
    expect(result2).to.be.a('boolean');
  });
});
