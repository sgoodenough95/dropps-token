// import { LSPFactory } from '@lukso/lsp-factory.js';
// import LSP7DigitalAsset from '@lukso/universalprofile-smart-contracts/artifacts/LSP7DigitalAsset.json';

// const LSP7DigitalAsset = require("@lukso/universalprofile-smart-contracts/artifacts/LSP7DigitalAsset.json")
const { LSPFactory } = require("@lukso/lsp-factory.js");
const LSP7 = require('/Users/samuelgoodenough/Documents/dropps/abi/LSP7.json');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const lspFactory = new LSPFactory("https://rpc.l14.lukso.network", {
    deployKey: "9a281ba39b73183681c2bdff3e76b0e1171437904b7eace92f6b5060200692c4",
    chainId: 22,
});

async function main() {

    const droppsToken = await lspFactory.DigitalAsset.deployLSP7DigitalAsset({
        name: "Dropps token",
        symbol: "DROPPS",
        ownerAddress: "0x2C37F5B9673023301AB5BFB83184a2195B4c0001",
        isNFT: true,
    });
    
    const myNFT = new web3.eth.Contract(
        LSP7,
        droppsToken.LSP7DigitalAsset.address
    );
    
    console.log(droppsToken);
    console.log("/n");
    console.log(myNFT);
    console.log("/n");

    const totalSupply = await myNFT.methods.totalSupply().call()
    console.log(totalSupply);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });