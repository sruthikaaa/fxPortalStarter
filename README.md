# FXPortal Transfer between Goerli and Mumbai

This project repository provides the interface for
- deposit of items to goerli testnet
- approving the assets for transfer
- transfer of items from goerli to mumbai testnet.
- checking the balance of mumbai testnet.

## Generate a Collection

Use DALLE or Midjourney to create a 5 item collection on the prompt-"Underwater city Pods".

Store it in ipfs[pinata.cloud]

## Metamask

Create a .env file to connect your metamask account and make sure you have enough funds -
(both goerli and mumbai testnet funds).

The networks have been defined in hardhat.config,js file

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance

## Authors

Sruthika S

@sruthikaaas@gmail.com

## License

This project is licensed under the [MIT] License.
