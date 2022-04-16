import { expect } from "chai";
import { ethers } from "hardhat";

describe("Accounts", async function () {
  let utils: any;
  let accounts: any;
  // Args
  const displayName: string = 'John Doe';
  const displayName1: string = 'J Doe';
  const phoneNumber: string = '+2348033330000';
  const email: string = 'john.doe@mail.com';
  const email1: string = 'j.doe@mail.com';
  const photoURL: string = 'photoURL';
  const role: string = 'Tenant';
  const isActive: boolean = true;
  const isActivated: boolean = true;

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
  });

  it("Should add a new acccount", async function () {
    const [owner, addr1, addr2, addr3, addr4] = await ethers.getSigners();

    const result = await accounts.connect(addr1).addAccount(addr1.address, addr1.address, displayName, email, phoneNumber, photoURL, role, isActive, isActivated);
    const res = await result.wait();

    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(accounts.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
    expect(res.to).to.not.equal('');
  });

  it("Should return an acccount", async function () {
    const [owner, addr1, addr2, addr3, addr4] = await ethers.getSigners();
    const res = await accounts.getAccount(addr1.address);

    expect(res.displayName).to.equal(displayName);
    expect(res.email).to.equal(email);
    expect(res.phoneNumber).to.equal(phoneNumber);
    expect(res.photoURL).to.equal(photoURL);
    expect(res.affiliate).to.equal(addr1.address);
    expect(res.role).to.equal(role);
    expect(res.isActivated).to.equal(true);
    expect(res.isActive).to.equal(true);
  });

  it("Should update and return an acccount", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const result = await accounts.connect(addr1).updateAccount(addr1.address, displayName1, email1, phoneNumber, photoURL, isActive);
    await result.wait();

    const res = await accounts.getAccount(addr1.address);

    expect(res.displayName).to.equal(displayName1);
    expect(res.email).to.equal(email1);
    expect(res.phoneNumber).to.equal(phoneNumber);
    expect(res.role).to.equal(role);
    expect(res.isActivated).to.equal(true);
    expect(res.isActive).to.equal(true);
  });
});
