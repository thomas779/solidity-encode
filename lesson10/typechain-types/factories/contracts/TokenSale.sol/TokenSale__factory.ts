/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenSale,
  TokenSaleInterface,
} from "../../../contracts/TokenSale.sol/TokenSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ratio",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paymentToken",
    outputs: [
      {
        internalType: "contract IMyERC20Token",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "purchaseTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "ratio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106593803806106598339818101604052810190610032919061011a565b8160008190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061015a565b600080fd5b6000819050919050565b61009981610086565b81146100a457600080fd5b50565b6000815190506100b681610090565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e7826100bc565b9050919050565b6100f7816100dc565b811461010257600080fd5b50565b600081519050610114816100ee565b92915050565b6000806040838503121561013157610130610081565b5b600061013f858286016100a7565b925050602061015085828601610105565b9150509250929050565b6104f0806101696000396000f3fe60806040526004361061003f5760003560e01c80633013ce29146100445780633290ce291461006f5780636d1b229d1461007957806371ca337d146100a2575b600080fd5b34801561005057600080fd5b506100596100cd565b60405161006691906102c7565b60405180910390f35b6100776100f3565b005b34801561008557600080fd5b506100a0600480360381019061009b919061031d565b61019c565b005b3480156100ae57600080fd5b506100b7610242565b6040516100c49190610359565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000349050600080548261010791906103a3565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b81526004016101669291906103f5565b600060405180830381600087803b15801561018057600080fd5b505af1158015610194573d6000803e3d6000fd5b505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b81526004016101fb9392919061041e565b6020604051808303816000875af115801561021a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023e919061048d565b5050565b60005481565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061028d61028861028384610248565b610268565b610248565b9050919050565b600061029f82610272565b9050919050565b60006102b182610294565b9050919050565b6102c1816102a6565b82525050565b60006020820190506102dc60008301846102b8565b92915050565b600080fd5b6000819050919050565b6102fa816102e7565b811461030557600080fd5b50565b600081359050610317816102f1565b92915050565b600060208284031215610333576103326102e2565b5b600061034184828501610308565b91505092915050565b610353816102e7565b82525050565b600060208201905061036e600083018461034a565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006103ae826102e7565b91506103b9836102e7565b9250826103c9576103c8610374565b5b828204905092915050565b60006103df82610248565b9050919050565b6103ef816103d4565b82525050565b600060408201905061040a60008301856103e6565b610417602083018461034a565b9392505050565b600060608201905061043360008301866103e6565b61044060208301856103e6565b61044d604083018461034a565b949350505050565b60008115159050919050565b61046a81610455565b811461047557600080fd5b50565b60008151905061048781610461565b92915050565b6000602082840312156104a3576104a26102e2565b5b60006104b184828501610478565b9150509291505056fea264697066735822122037ae9fc0a50f0b6dc86ebf8f3231aeeb1251760174a482e9bb06062e889b654664736f6c63430008110033";

type TokenSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenSale__factory extends ContractFactory {
  constructor(...args: TokenSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ratio: PromiseOrValue<BigNumberish>,
    _paymentToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenSale> {
    return super.deploy(
      _ratio,
      _paymentToken,
      overrides || {}
    ) as Promise<TokenSale>;
  }
  override getDeployTransaction(
    _ratio: PromiseOrValue<BigNumberish>,
    _paymentToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ratio, _paymentToken, overrides || {});
  }
  override attach(address: string): TokenSale {
    return super.attach(address) as TokenSale;
  }
  override connect(signer: Signer): TokenSale__factory {
    return super.connect(signer) as TokenSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenSaleInterface {
    return new utils.Interface(_abi) as TokenSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenSale {
    return new Contract(address, _abi, signerOrProvider) as TokenSale;
  }
}