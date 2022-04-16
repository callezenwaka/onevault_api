// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

const main = async () => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const Utils = await ethers.getContractFactory("Utils");
  const utils = await Utils.deploy();
  await utils.deployed();
  console.log("Utils deployed to:", utils.address);

  const Accounts = await ethers.getContractFactory("Accounts", {
    libraries: {
      Utils: utils.address,
    },
  });
  const accounts = await Accounts.deploy();
  await accounts.deployed();
  console.log("Accounts deployed to:", accounts.address);

  const Services = await ethers.getContractFactory("Services", {
    libraries: {
      Utils: utils.address,
    },
  });
  const services = await Services.deploy(accounts.address);
  await services.deployed();
  console.log("Services deployed to:", services.address);

  const Documents = await ethers.getContractFactory("Documents");
  const documents = await Documents.deploy(accounts.address);
  await documents.deployed();
  console.log("Documents deployed to:", documents.address);
}

// Use async/await everywhere and properly handle errors.
const init = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

init();