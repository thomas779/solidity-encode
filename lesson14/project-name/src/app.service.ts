import { HttpException, Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as TokenJson from './assets/MyToken.json';

const CONTRACT_ADDRESS = "0x95cd6c82ca89c191bc1b12f6960b0e59af3f4fef";

export class ClaimPaymentDTO {
  id: string;
  secret: string;
  address: string;
}

export class PaymentOrder {
  id: string;
  secret: string;
  amount: number;
}

@Injectable()
export class AppService {
  provider: ethers.providers.Provider;
  contract: ethers.Contract;

  database: PaymentOrder[];

  constructor() {
    this.provider = ethers.getDefaultProvider("goerli");
    this.contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      TokenJson.abi,
      this.provider);
    this.database = [];
  }

  getTokenAddress() {
    return {result: CONTRACT_ADDRESS};
  }

  async getTotalSupply() {
    const totalSupplyBN = await this.contract.totalSupply();
    const totalSupply = ethers.utils.formatEther(totalSupplyBN); // convert hexadecimal to decimal
    return {result: totalSupply};
  }

  async getAllowance(from: string, to: string) {
    const allowance = await this.contract.allowance(from, to);
    return ethers.utils.formatEther(allowance);
  }

  getTransactionByHash(hash: string) {
    return this.provider.getTransaction(hash);
  }

  async getTransactionRecepitByHash(hash: string) {
    const tx = await this.getTransactionByHash(hash)
    return await tx.wait();
  }

  getPaymentOrderById(id: string) {
    const element = this.database.find((entry) => entry.id === id);
    if (!element) throw new HttpException("Not Found", 404);
    return { id: element.id, amount: element.amount };
  }

  listPaymentOrders() {
    const filteredDatabase = [];
    this.database.forEach(element => {
      filteredDatabase.push({
        id: element.id,
        amount: element.amount
      });
      return filteredDatabase;
    })
  }

  createPaymentOrder(body: PaymentOrder) {
    this.database.push(body);
  }

  async claimPayment(body: ClaimPaymentDTO) {
    const element = this.database.find((entry) => entry.id === body.id);
    if (!element) throw new HttpException("Not Found", 404);
    if (body.secret != element.secret) return false;
    const seed = process.env.MNEMONIC;
    const wallet = ethers.Wallet.fromMnemonic(seed);
    const signer = wallet.connect(this.provider);
    const signedContract = this.contract.connect(signer);
    const tx = await signedContract.mint(
      body.address,
      ethers.utils.parseEther(element.amount.toString()),
    );
    return tx;
  }
}
