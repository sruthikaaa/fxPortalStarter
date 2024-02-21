const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-goerli.publicnode.com";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0xA850cF8289419D21AbC27558bF3F844d5225B29E";

  const City_pods = await ethers.getContractFactory("Pods", signer);
  const pods = await City_pods.attach(contractAddress);

  await pods.mint(5);
  console.log("Number of NFTs minted:5");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
