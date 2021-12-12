// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

// import LSPFactory from '@lukso/lsp-factory.js';

const { LSPFactory } = require("@lukso/lsp-factory.js")

// import LSP7DigitalAsset from '@lukso/universalprofile-smart-contracts/artifacts/LSP7DigitalAsset.json';

const { LSP7DigitalAsset } = require("@lukso/universalprofile-smart-contracts/artifacts/LSP7DigitalAsset.json");

const provider = 'https://rpc.l14.lukso.network'; // RPC url used to connect to the network

const lspFactory = new LSPFactory(provider, {
  deployKey: process.env.PRIV_KEY, // Private key of the account which will deploy UPs
  chainId: 22, // Chain Id of the network you want to connect to
});

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");

  // await greeter.deployed();

  // console.log("Greeter deployed to:", greeter.address);

  const myDigitalAsset = await lspFactory.DigitalAsset.deployLSP7DigitalAsset({
    name: "Dropps",
    symbol: "DRPS",
    ownerAddress: "0x2C37F5B9673023301AB5BFB83184a2195B4c0001", // Account which will own the Token Contract
    isNFT: true,
  }) 

  const myNFT = new web3.eth.Contract(
    LSP7.abi,
    myDigitalAsset.LSP7DigitalAsset.address
  );

  const totalSupply = myNFT.methods.totalSupply().call()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
