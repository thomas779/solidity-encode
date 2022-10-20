// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

interface IMyERC20Token is IERC20 {
    function mint(address to, uint256 amount) external;
    function burnFrom(address from, uint256 amount) external;
}

interface IMyERC721Token is IERC721 {
    function safeMint(address to, uint256 amount) external;
    function burn(address tokenId) external;
}

contract TokenSale is AccessControl{
    /// @notice Purchase Ratio between Sale ERC20 and Ether
    uint256 public ratio;
    uint256 public tokenPrice;
    uint256 public adminPool;
    uint256 public publicPool;
    IMyERC20Token public paymentToken;
    IMyERC721Token public nftContract;

    constructor(uint256 _ratio, address _paymentToken) {
        ratio = _ratio;
        paymentToken = IMyERC20Token(_paymentToken);
    }

    function purchaseTokens() public payable {
        uint256 etherReceived = msg.value;
        uint256 tokensToBeEarned = etherReceived / ratio;
        paymentToken.mint(msg.sender, tokensToBeEarned);
    }

    function burnTokens(uint256 amount) public {
        paymentToken.burnFrom(msg.sender, amount); 
        uint256 ethToBeReturned = ratio * amount;
        payable(msg.sender).transfer(ethToBeReturned);
    }

    function purchaseNFT(uint256 tokenId) public {
        paymentToken.transferFrom(msg.sender, address(this), tokenPrice);
        nftContract.safeMint(msg.sender, tokenId);
        uint256 charge = tokenPrice / 2;
        adminPool += charge;
        publicPool += tokenPrice - charge;
    }

    function burnNFT(uint256 tokenId) public {
        nftContract.burn(tokenId);
        paymentToken.transfer(msg.sender, tokenPrice / 2);
    }

    function withdraw(uint256 amount) public onlyOwner {
        require(amount <= adminPool);
        paymentToken.transfer(msg.sender, amount);
    }
}