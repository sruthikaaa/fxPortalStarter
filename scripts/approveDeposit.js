const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/Pods.sol/Pods.json');
require('dotenv').config();

async function main() {
 
  const networkAddress = 'https://ethereum-goerli.publicnode.com';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  const City_pods = await ethers.getContractFactory("Pods");
  const pods = await City_pods.attach('0xA850cF8289419D21AbC27558bF3F844d5225B29E');

  const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const approveTx = await pods.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('Transfer has been approved successfully');

const NFTid=[0,1,2,3,4];
  for (let i = 0; i < 5; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      pods.address,
      wallet.address, 
      NFTid[i],
      '0x6566'
    );

    await depositTx.wait();
  }

  console.log("Deposited");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
