/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "NotQuiteRandom",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NotQuiteRandom__factory>;
    getContractFactory(
      name: "PseudoRandom",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PseudoRandom__factory>;
    getContractFactory(
      name: "Random",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Random__factory>;

    getContractAt(
      name: "NotQuiteRandom",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NotQuiteRandom>;
    getContractAt(
      name: "PseudoRandom",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PseudoRandom>;
    getContractAt(
      name: "Random",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Random>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}