import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { MyERC20Token, TokenSale } from "../typechain-types";

const ERC20_TOKEN_RATIO = 5;

describe("NFT Shop", async () => {
    let TokenSaleContract: TokenSale;
    let ERC20Token: MyERC20Token;
    let deployer: SignerWithAddress;
    let account1: SignerWithAddress;
    let account2: SignerWithAddress;

  beforeEach(async () => {
    [deployer, account1, account2] = await ethers.getSigners();
    const ERC20TokenFactory = await ethers.getContractFactory("MyERC20Token");
    const tokenSaleContractFactory = await ethers.getContractFactory("TokenSale");
    ERC20Token = await ERC20TokenFactory.deploy();
    await ERC20Token.deployed();
    TokenSaleContract = await tokenSaleContractFactory.deploy(ERC20_TOKEN_RATIO, ERC20Token.address);
    await TokenSaleContract.deployed();
    const MINTER_ROLE = await ERC20Token.MINTER_ROLE();
    const grantRoleTx = await ERC20Token.grantRole(MINTER_ROLE, TokenSaleContract.address);
    await grantRoleTx.wait();
  });

  describe("When the Shop contract is deployed", async () => {
    it("defines the ratio as provided in parameters", async () => {
      const ratio = await TokenSaleContract.ratio();
      expect(ratio).to.eq(ERC20_TOKEN_RATIO);
    });

    it("uses a valid ERC20 as payment token", async () => {
      const paymentTokenAddress = await TokenSaleContract.paymentToken();
      expect(paymentTokenAddress).to.equal(ERC20Token.address)
      const ERC20TokenFactory = await ethers.getContractFactory("MyERC20Token");
      const paymentTokenContract = ERC20TokenFactory.attach(paymentTokenAddress);
      const myBalance = await paymentTokenContract.balanceOf(deployer.address);
      expect(myBalance).to.eq(0);
      const totalSupply = await paymentTokenContract.totalSupply();
      expect(totalSupply).to.eq(0);
    });
  });

  describe("When a user purchase an ERC20 from the Token contract", async () => {
    let amountToBeSentBn = ethers.utils.parseUnits("1", "wei");
    let amountToBeReceived = amountToBeSentBn.div(ERC20_TOKEN_RATIO)
    let balanceBeforeBn: BigNumber;
    let gasCosts: BigNumber;
    
    beforeEach(async () => {
      balanceBeforeBn = await account1.getBalance();
      const purchaseTokensTx = await TokenSaleContract // or ethers.provider.getBalance
      .connect(account1)
      .purchaseTokens({value: amountToBeSentBn });
      const purchaseTokensTxReceipt = await purchaseTokensTx.wait();
      const gasUnitsUsed = purchaseTokensTxReceipt.gasUsed;
      const gasPrice = purchaseTokensTxReceipt.effectiveGasPrice;
      gasCosts = gasUnitsUsed.mul(gasPrice);
    })

    it("charges the correct amount of ETH", async () => {
      const balanceAfterBn = await account1.getBalance();
      const diff = balanceBeforeBn.sub(balanceAfterBn);
      const expectedDiff = amountToBeSentBn.add(gasCosts);
      expect(expectedDiff).to.equal(diff);
    });

    describe("When a user purchase an ERC20 from the Token contract", async () => {
      let approveGasCosts: BigNumber;
      let burnGasCosts: BigNumber;
      
      beforeEach(async () => {
        const approveTx = await ERC20Token
          .connect(account1)
          .approve(TokenSaleContract.address, amountToBeReceived);
        const approveTxReceipt = await approveTx.wait();
        const approveGasUnitsUsed = approveTxReceipt.gasUsed;
        const approveGasPrice = approveTxReceipt.effectiveGasPrice;
        approveGasCosts = approveGasUnitsUsed.mul(approveGasPrice);        
        const burnTokensTx = await TokenSaleContract
          .connect(account1)
          .burnTokens(amountToBeReceived);
        const burnTokensTxReceipt = await burnTokensTx.wait();
        const burnGasUnitsUsed = burnTokensTxReceipt.gasUsed;
        const burnGasPrice = burnTokensTxReceipt.effectiveGasPrice;
        burnGasCosts = burnGasUnitsUsed.mul(burnGasPrice);
      })

      it("gives the correct amount of tokens", async () => {
        const balanceAfterBn = await account1.getBalance();
        const diff = balanceBeforeBn.sub(balanceAfterBn);
        expect(account1Balance).to.eq(amountToBeReceived);
      });

      it("increases the balance of ETH in the contract", async () => {
        const contractBalance = ethers.provider.getBalance(TokenSaleContract.address);
        expect(contractBalance).to.eq(amountToBeSentBn);
      });
    });
  });

  describe("When a user burns an ERC20 at the Token contract", async () => {
    it("gives the correct amount of ETH", async () => {
      throw new Error("Not implemented");
    });

    it("burns the correct amount of tokens", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When a user purchase a NFT from the Shop contract", async () => {
    it("charges the correct amount of ETH", async () => {
      throw new Error("Not implemented");
    });

    it("updates the owner account correctly", async () => {
      throw new Error("Not implemented");
    });

    it("update the pool account correctly", async () => {
      throw new Error("Not implemented");
    });

    it("favors the pool with the rounding", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When a user burns their NFT at the Shop contract", async () => {
    it("gives the correct amount of ERC20 tokens", async () => {
      throw new Error("Not implemented");
    });
    it("updates the pool correctly", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When the owner withdraw from the Shop contract", async () => {
    it("recovers the right amount of ERC20 tokens", async () => {
      throw new Error("Not implemented");
    });

    it("updates the owner account correctly", async () => {
      throw new Error("Not implemented");
    });
  });
});