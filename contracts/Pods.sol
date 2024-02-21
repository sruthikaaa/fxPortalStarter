// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Pods is ERC721A{

    address public owner;
    string baseUrl="https://gateway.pinata.cloud/ipfs/QmXPVzAh7hp7KHiwbhPvQrGNJMehNRiB2ozW6yV1qjr33A";
    uint256 public maxMintable = 5;
    string public prompt_desc ="Underwater city pods";

    constructor() ERC721A("Pods", "PS") {
        owner = msg.sender;
        
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        
        _;
    }

    function mint(uint256 mint_amount) external payable onlyOwner{
        if(totalSupply() + mint_amount > maxMintable){
         revert ("MAX LIMIT IS 5");
        } 
        _mint(msg.sender, mint_amount);
    }


    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt_desc;
    }
}
