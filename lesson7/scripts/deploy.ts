import { expect } from "chai";
import { ethers } from "hardhat";
import { Ballot } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config()

const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];

let ballotContract: Ballot;

function convertStringArrayToBytes32(array: string[]) {
  const bytes32Array = [];
  for (let index = 0; index < array.length; index++) {
    bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
  }
  return bytes32Array;
}

async function main() {
  const options = {
    alchemy: process.env.ALCHEMY_API_KEY
  };
  const provider = ethers.providers.getDefaultProvider("goerli", options);
  const accounts = await ethers.getSigners();
  console.log("Deploying Ballot contract");
  console.log("Proposals: ");
  PROPOSALS.forEach((element, index) => {
    console.log('Proposal N. ${index + 1}: ${element}')
  });
  const ballotFactory = await ethers.getContractFactory("Ballot");
  const ballotContract = await ballotFactory.deploy(
    convertStringArrayToBytes32(PROPOSALS)
  );
  await ballotContract.deployed();
  for (let index = 0; index < PROPOSALS.length; index++) {
    const proposal = await ballotContract.proposals(index);
    const name = await ethers.utils.parseBytes32String(proposal.name);
    console.log({index, name, proposal});
  }
  const chairperson = await ballotContract.chairperson();
  console.log({chairperson});
  console.log({address0: accounts[0].address, address1: accounts[1].address});
  let voterForAddress1 = await ballotContract.voters(accounts[1].address);
  console.log({voterForAddress1});
  console.log("Giving right ot vote to address1");
  const giveRightToVoteTx = await ballotContract.giveRightToVote(
    accounts[1].address
  );
  const giveRightToVoteReceipt = await giveRightToVoteTx.wait();
  console.log(giveRightToVoteReceipt);
  voterForAddress1 = await ballotContract.voters(accounts[1].address);
  console.log({voterForAddress1});
  console.log("Using account 1 to cast a vote for proposal 0");
  const castVoteTx = await ballotContract.connect(accounts[1]).vote(0);
  const castVoteTxReceipt = await castVoteTx.wait();
  console.log({castVoteTxReceipt});
  const proposal0 = await ballotContract.proposals(0);
  const name = ethers.utils.parseBytes32String(proposal0.name);
  console.log({ index: 0, name, proposal0});
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
