require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  // networks: {
  //   lukso: {
  //     url: "https://rpc.l14.lukso.network",
  //     accounts: [ "9a281ba39b73183681c2bdff3e76b0e1171437904b7eace92f6b5060200692c4" ]
  //   },
  // }
};
