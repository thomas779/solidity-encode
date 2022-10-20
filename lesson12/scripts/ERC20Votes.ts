import { ethers } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config()

const TOKENS_MINTED = ethers.utils.parseEther("1");

async function main() {
    const [deployer, account1, account2] = await ethers.getSigners();
    const myTokenContractFactory = await ethers.getContractFactory("MyToken");
    const myTokenContract = await myTokenContractFactory.deploy();
    await myTokenContract.deployed();
    console.log(`My token contract was deployed at the address of ${myTokenContract.address}.`);
    
    const totalSupply = await myTokenContract.totalSupply();
    console.log(`My total supply is ${totalSupply}.\n`);
    console.log("Minting new tokens for account 1...");
    
    const mintTx = await myTokenContract.mint(
        account1.address,
        TOKENS_MINTED);
    await mintTx.wait(); 
    const totalSupplyAfter = await myTokenContract.totalSupply();
    console.log(`My total supply is ${ethers.utils.formatEther(totalSupplyAfter)}.\n`);

    console.log("What is the current votePower of account 1?");
    const account1InitialVotingPowerAfterMint = await myTokenContract.getVotes(account1.address);
    console.log(`My vote balance of account1 after minting is ${ethers.utils.formatEther(account1InitialVotingPowerAfterMint)}.\n`);
    
    console.log("Delegating from account 1 to account 1...");
    const delegateTx = await myTokenContract.connect(account1).delegate(account1.address);
    await delegateTx.wait();
    const account1VotingPowerAfterDelegate = await myTokenContract.getVotes(account1.address);
    console.log(`My vote balance of account1 after delegating is ${ethers.utils.formatEther(account1VotingPowerAfterDelegate)}.\n`);

    const currentBlock2 = await ethers.provider.getBlock("latest");
    const mintTx2 = await myTokenContract.mint(
        account1.address,
        TOKENS_MINTED);
    await mintTx2.wait();
    console.log(`The current Block Number is ${currentBlock2.number}.\n`)

    const currentBlock3 = await ethers.provider.getBlock("latest");
    const mintTx3 = await myTokenContract.mint(
        account2.address,
        TOKENS_MINTED);
    await mintTx3.wait();
    console.log(`The current Block Number is ${currentBlock3.number}.\n`)

    const currentBlock4 = await ethers.provider.getBlock("latest");
    const mintTx4 = await myTokenContract.mint(
        account2.address,
        TOKENS_MINTED);
    await mintTx4.wait();
    console.log(`The current Block Number is ${currentBlock4.number}.\n`)
    
    const pastVotes = await Promise.all([
        await myTokenContract.getPastVotes(account1.address, 4),
        await myTokenContract.getPastVotes(account1.address, 3),
        await myTokenContract.getPastVotes(account1.address, 2),
        await myTokenContract.getPastVotes(account1.address, 1),
        await myTokenContract.getPastVotes(account1.address, 0),
    ]);
    console.log({pastVotes});
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
