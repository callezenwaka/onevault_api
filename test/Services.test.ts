import { expect } from "chai";
import { ethers } from "hardhat";

describe("Documents", async function () {
  let utils: any;
  let accounts: any;
  let services: any;
  const phoneNumber: string = '+2348033330000';
  const index: number = 0;
  const cost: number = 1;
  const name: string = 'Certificate';
  const newName: string = 'Transcript';
  const displayName: string = 'Tenant Account';
  const email: string = 'tenant@mail.com';
  const photoURL: string = 'https://ipfs.infura.io/ipfs/QmUHa9QV34uPdJ1JZ5XqcQgn5jfmW3SxUnt3yoFfHu8Sow';
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

    const Services = await ethers.getContractFactory("Services", {
      libraries: {
        Utils: utils.address,
      },
    });
    services = await Services.deploy(accounts.address);
    await services.deployed();
    console.log("Services deployed to:", services.address);
  });

  it("Should add new service", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const user = await accounts.connect(addr1).addAccount(addr1.address, addr1.address, displayName, email, phoneNumber, photoURL, role, isActive, isActivated);
    await user.wait();

    const service = await services.connect(addr1).addService(name, cost);
    const res = await service.wait();

    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(services.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
  });

  it("Should return a tenant service", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const res = await services.connect(addr1).getService(index);

    expect(res).to.be.an('array').that.is.not.empty;
    expect(res.name).to.equal(name);
    expect(res.cost).to.equal(cost);
    expect(res.index).to.equal(index);
  });

  it("Should update a tenant service", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const service = await services.connect(addr1).updateService(newName, cost, index);
    const res = await service.wait();

    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(services.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
  });

  it("Should return tenant services", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const res = await services.connect(addr1).getServices(addr1.address);

    expect(res).to.be.an('array').that.is.not.empty;
    expect(res.length).to.equal(1);
    expect(res[0].name).to.equal(newName);
    expect(res[0].cost).to.equal(cost);
    expect(res[0].index).to.equal(index);
  });

  it("Should delete a tenant service", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const service = await services.connect(addr1).deleteService(0);
    const res = await service.wait();

    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(services.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
  });

  it("Should return total count of tenant services", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const res = await services.connect(addr1).getTotal(addr1.address);

    expect(res).to.equal(0);
    expect(res.toNumber()).to.be.a('number');
  });
});
