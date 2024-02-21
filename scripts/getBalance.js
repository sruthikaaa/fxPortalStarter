const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Pods.sol/Pods.json");

const tokenAddress = "0x86109bC2c58D656706e7A400912F59682092A1Be";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x3e076Ca603350358B7a29F7310De69413F93021f"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("Mumbai Pods Token Balance " + await token.balanceOf(walletAddress));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
