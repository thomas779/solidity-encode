/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  CorrectSortedBallot,
  CorrectSortedBallotInterface,
} from "../CorrectSortedBallot";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposalsBeingSorted",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "restartSorting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "savedIndex",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "steps",
        type: "uint256",
      },
    ],
    name: "sortProposals",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sorted",
    outputs: [
      {
        internalType: "bool",
        name: "isSorted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sortedWords",
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
  {
    inputs: [],
    name: "swaps",
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
  "0x608060405234801561001057600080fd5b506040516106cd3803806106cd83398101604081905261002f91610154565b60005b81518110156100a5576000604051806040016040528084848151811061005a5761005a610211565b6020908102919091018101518252600091810182905283546001818101865594835291819020835160029093020191825591909101519101558061009d81610227565b915050610032565b5060016004819055600080546100bc9291906100c3565b505061024e565b8280548282559060005260206000209060020281019282156101135760005260206000209160020282015b82811115610113578254825560018084015490830155600292830192909101906100ee565b5061011f929150610123565b5090565b5b8082111561011f5760008082556001820155600201610124565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561016757600080fd5b82516001600160401b038082111561017e57600080fd5b818501915085601f83011261019257600080fd5b8151818111156101a4576101a461013e565b8060051b604051601f19603f830116810181811085821117156101c9576101c961013e565b6040529182528482019250838101850191888311156101e757600080fd5b938501935b82851015610205578451845293850193928501926101ec565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161024757634e487b7160e01b600052601160045260246000fd5b5060010190565b6104708061025d6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80634c9841851161005b5780634c984185146100f35780637058201e146100fc578063c06d634414610105578063e4420c351461011857600080fd5b8063013cf08b1461008d578063214d84b8146100ba5780632de2c5ac146100c457806331b8f1e5146100dc575b600080fd5b6100a061009b3660046103c3565b61012b565b604080519283526020830191909152015b60405180910390f35b6100c2610159565b005b600054600354145b60405190151581526020016100b1565b6100e560045481565b6040519081526020016100b1565b6100e560025481565b6100e560035481565b6100a06101133660046103c3565b61017b565b6100cc6101263660046103c3565b61018b565b6000818154811061013b57600080fd5b60009182526020909120600290910201805460019091015490915082565b6000600281905560038190556001600481905581546101789290610348565b50565b6001818154811061013b57600080fd5b6000805b600154600354101561032e578281106101ab5750600092915050565b600054600454106101d8576002546001546101c691906103f2565b6003556000600255600160045561031c565b60008060016004546101ea91906103f2565b815481106101fa576101fa61040b565b600091825260208083206040805180820190915260029093020180548352600101549082015260045482549193509081106102375761023761040b565b600091825260209091206002909102015481511115610305576000600454815481106102655761026561040b565b90600052602060002090600202016000600160045461028491906103f2565b815481106102945761029461040b565b90600052602060002090600202016000820154816000015560018201548160010155905050806000600454815481106102cf576102cf61040b565b6000918252602080832084516002938402909101908155930151600190930192909255815491906102ff83610421565b91905055505b6004805490600061031583610421565b9190505550505b8061032681610421565b91505061018f565b6001805461033e91600091610348565b5060019392505050565b8280548282559060005260206000209060020281019282156103985760005260206000209160020282015b8281111561039857825482556001808401549083015560029283019290910190610373565b506103a49291506103a8565b5090565b5b808211156103a457600080825560018201556002016103a9565b6000602082840312156103d557600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610405576104056103dc565b92915050565b634e487b7160e01b600052603260045260246000fd5b600060018201610433576104336103dc565b506001019056fea26469706673582212203907d229b6109dd825c9ab3732eb982eb01b1346882630fa901f2b745e8b031f64736f6c63430008110033";

type CorrectSortedBallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CorrectSortedBallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CorrectSortedBallot__factory extends ContractFactory {
  constructor(...args: CorrectSortedBallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    proposalNames: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CorrectSortedBallot> {
    return super.deploy(
      proposalNames,
      overrides || {}
    ) as Promise<CorrectSortedBallot>;
  }
  override getDeployTransaction(
    proposalNames: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(proposalNames, overrides || {});
  }
  override attach(address: string): CorrectSortedBallot {
    return super.attach(address) as CorrectSortedBallot;
  }
  override connect(signer: Signer): CorrectSortedBallot__factory {
    return super.connect(signer) as CorrectSortedBallot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CorrectSortedBallotInterface {
    return new utils.Interface(_abi) as CorrectSortedBallotInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CorrectSortedBallot {
    return new Contract(address, _abi, signerOrProvider) as CorrectSortedBallot;
  }
}