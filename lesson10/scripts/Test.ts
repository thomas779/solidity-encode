import { expect } from "chai";
import { ethers } from "hardhat";
import { MyERC20Token } from "../typechain-types"

const INITIAL_SUPPLY = 10000;

describe("Basic tests for understanding ERC20", () => {
    let MyERC20Contract: MyERC20Token;
    let accounts;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        const MyERC20ContractFactory = await ethers.getContractFactory(
            "MyERC20Token"
        );
        MyERC20Contract = await MyERC20ContractFactory.deploy(INITIAL_SUPPLY);
        await MyERC20Contract.deployed();
    });

    it("should have zero total supply at deployment", async () => {
        const totalSupplyDecimals = await MyERC20Contract.totalSupply();
        const decimals = await MyERC20Contract.decimals();
        const totalSupply = parseFloat(ethers.utils.formatUnits(totalSupplyDecimals, decimals));
        expect(totalSupply).to.equal(INITIAL_SUPPLY);
    })

    it("should have zero total supply at deployment", async () => {
        const totalSupplyDecimals = await MyERC20Contract.totalSupply();
        const decimals = await MyERC20Contract.decimals();
        const totalSupply = parseFloat(ethers.utils.formatUnits(totalSupplyDecimals, decimals));
        expect(totalSupply).to.equal(INITIAL_SUPPLY);
    })
});