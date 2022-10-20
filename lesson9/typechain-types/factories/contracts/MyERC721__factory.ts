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
import type { PromiseOrValue } from "../../common";
import type { MyERC721, MyERC721Interface } from "../../contracts/MyERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620025fc380380620025fc833981810160405281019062000037919062000110565b6040518060400160405280600981526020017f4d792045524337323100000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d527567000000000000000000000000000000000000000000000000000000008152508160009081620000b49190620003b2565b508060019081620000c69190620003b2565b5050505062000499565b600080fd5b6000819050919050565b620000ea81620000d5565b8114620000f657600080fd5b50565b6000815190506200010a81620000df565b92915050565b600060208284031215620001295762000128620000d0565b5b60006200013984828501620000f9565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001c457607f821691505b602082108103620001da57620001d96200017c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000205565b62000250868362000205565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620002936200028d6200028784620000d5565b62000268565b620000d5565b9050919050565b6000819050919050565b620002af8362000272565b620002c7620002be826200029a565b84845462000212565b825550505050565b600090565b620002de620002cf565b620002eb818484620002a4565b505050565b5b81811015620003135762000307600082620002d4565b600181019050620002f1565b5050565b601f82111562000362576200032c81620001e0565b6200033784620001f5565b8101602085101562000347578190505b6200035f6200035685620001f5565b830182620002f0565b50505b505050565b600082821c905092915050565b6000620003876000198460080262000367565b1980831691505092915050565b6000620003a2838362000374565b9150826002028217905092915050565b620003bd8262000142565b67ffffffffffffffff811115620003d957620003d86200014d565b5b620003e58254620001ab565b620003f282828562000317565b600060209050601f8311600181146200042a576000841562000415578287015190505b62000421858262000394565b86555062000491565b601f1984166200043a86620001e0565b60005b8281101562000464578489015182556001820191506020850194506020810190506200043d565b8683101562000484578489015162000480601f89168262000374565b8355505b6001600288020188555050505b505050505050565b61215380620004a96000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e991906113b7565b6102bc565b6040516100fb91906113ff565b60405180910390f35b61010c61039e565b60405161011991906114aa565b60405180910390f35b61013c60048036038101906101379190611502565b610430565b6040516101499190611570565b60405180910390f35b61016c600480360381019061016791906115b7565b610476565b005b610188600480360381019061018391906115f7565b61058d565b005b6101a4600480360381019061019f91906115f7565b6105ed565b005b6101c060048036038101906101bb9190611502565b61060d565b6040516101cd9190611570565b60405180910390f35b6101f060048036038101906101eb919061164a565b6106be565b6040516101fd9190611686565b60405180910390f35b61020e610775565b60405161021b91906114aa565b60405180910390f35b61023e600480360381019061023991906116cd565b610807565b005b61025a60048036038101906102559190611842565b61081d565b005b61027660048036038101906102719190611502565b61087f565b60405161028391906114aa565b60405180910390f35b6102a660048036038101906102a191906118c5565b6108e7565b6040516102b391906113ff565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061039757506103968261097b565b5b9050919050565b6060600080546103ad90611934565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611934565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b826109e5565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104818261060d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036104f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e8906119d7565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610510610a30565b73ffffffffffffffffffffffffffffffffffffffff16148061053f575061053e81610539610a30565b6108e7565b5b61057e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057590611a69565b60405180910390fd5b6105888383610a38565b505050565b61059e610598610a30565b82610af1565b6105dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490611afb565b60405180910390fd5b6105e8838383610b86565b505050565b6106088383836040518060200160405280600081525061081d565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ac90611b67565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361072e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072590611bf9565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461078490611934565b80601f01602080910402602001604051908101604052809291908181526020018280546107b090611934565b80156107fd5780601f106107d2576101008083540402835291602001916107fd565b820191906000526020600020905b8154815290600101906020018083116107e057829003601f168201915b5050505050905090565b610819610812610a30565b8383610dec565b5050565b61082e610828610a30565b83610af1565b61086d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086490611afb565b60405180910390fd5b61087984848484610f58565b50505050565b606061088a826109e5565b6000610894610fb4565b905060008151116108b457604051806020016040528060008152506108df565b806108be84610fcb565b6040516020016108cf929190611c55565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6109ee8161112b565b610a2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2490611b67565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610aab8361060d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610afd8361060d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b3f5750610b3e81856108e7565b5b80610b7d57508373ffffffffffffffffffffffffffffffffffffffff16610b6584610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ba68261060d565b73ffffffffffffffffffffffffffffffffffffffff1614610bfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf390611ceb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6290611d7d565b60405180910390fd5b610c76838383611197565b610c81600082610a38565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cd19190611dcc565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d289190611e00565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610de783838361119c565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5190611e80565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f4b91906113ff565b60405180910390a3505050565b610f63848484610b86565b610f6f848484846111a1565b610fae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa590611f12565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008203611012576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611126565b600082905060005b6000821461104457808061102d90611f32565b915050600a8261103d9190611fa9565b915061101a565b60008167ffffffffffffffff8111156110605761105f611717565b5b6040519080825280601f01601f1916602001820160405280156110925781602001600182028036833780820191505090505b5090505b6000851461111f576001826110ab9190611dcc565b9150600a856110ba9190611fda565b60306110c69190611e00565b60f81b8183815181106110dc576110db61200b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856111189190611fa9565b9450611096565b8093505050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006111c28473ffffffffffffffffffffffffffffffffffffffff16611328565b1561131b578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026111eb610a30565b8786866040518563ffffffff1660e01b815260040161120d949392919061208f565b6020604051808303816000875af192505050801561124957506040513d601f19601f8201168201806040525081019061124691906120f0565b60015b6112cb573d8060008114611279576040519150601f19603f3d011682016040523d82523d6000602084013e61127e565b606091505b5060008151036112c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ba90611f12565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611320565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6113948161135f565b811461139f57600080fd5b50565b6000813590506113b18161138b565b92915050565b6000602082840312156113cd576113cc611355565b5b60006113db848285016113a2565b91505092915050565b60008115159050919050565b6113f9816113e4565b82525050565b600060208201905061141460008301846113f0565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611454578082015181840152602081019050611439565b60008484015250505050565b6000601f19601f8301169050919050565b600061147c8261141a565b6114868185611425565b9350611496818560208601611436565b61149f81611460565b840191505092915050565b600060208201905081810360008301526114c48184611471565b905092915050565b6000819050919050565b6114df816114cc565b81146114ea57600080fd5b50565b6000813590506114fc816114d6565b92915050565b60006020828403121561151857611517611355565b5b6000611526848285016114ed565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061155a8261152f565b9050919050565b61156a8161154f565b82525050565b60006020820190506115856000830184611561565b92915050565b6115948161154f565b811461159f57600080fd5b50565b6000813590506115b18161158b565b92915050565b600080604083850312156115ce576115cd611355565b5b60006115dc858286016115a2565b92505060206115ed858286016114ed565b9150509250929050565b6000806000606084860312156116105761160f611355565b5b600061161e868287016115a2565b935050602061162f868287016115a2565b9250506040611640868287016114ed565b9150509250925092565b6000602082840312156116605761165f611355565b5b600061166e848285016115a2565b91505092915050565b611680816114cc565b82525050565b600060208201905061169b6000830184611677565b92915050565b6116aa816113e4565b81146116b557600080fd5b50565b6000813590506116c7816116a1565b92915050565b600080604083850312156116e4576116e3611355565b5b60006116f2858286016115a2565b9250506020611703858286016116b8565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61174f82611460565b810181811067ffffffffffffffff8211171561176e5761176d611717565b5b80604052505050565b600061178161134b565b905061178d8282611746565b919050565b600067ffffffffffffffff8211156117ad576117ac611717565b5b6117b682611460565b9050602081019050919050565b82818337600083830152505050565b60006117e56117e084611792565b611777565b90508281526020810184848401111561180157611800611712565b5b61180c8482856117c3565b509392505050565b600082601f8301126118295761182861170d565b5b81356118398482602086016117d2565b91505092915050565b6000806000806080858703121561185c5761185b611355565b5b600061186a878288016115a2565b945050602061187b878288016115a2565b935050604061188c878288016114ed565b925050606085013567ffffffffffffffff8111156118ad576118ac61135a565b5b6118b987828801611814565b91505092959194509250565b600080604083850312156118dc576118db611355565b5b60006118ea858286016115a2565b92505060206118fb858286016115a2565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061194c57607f821691505b60208210810361195f5761195e611905565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006119c1602183611425565b91506119cc82611965565b604082019050919050565b600060208201905081810360008301526119f0816119b4565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000611a53603e83611425565b9150611a5e826119f7565b604082019050919050565b60006020820190508181036000830152611a8281611a46565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611ae5602e83611425565b9150611af082611a89565b604082019050919050565b60006020820190508181036000830152611b1481611ad8565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611b51601883611425565b9150611b5c82611b1b565b602082019050919050565b60006020820190508181036000830152611b8081611b44565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611be3602983611425565b9150611bee82611b87565b604082019050919050565b60006020820190508181036000830152611c1281611bd6565b9050919050565b600081905092915050565b6000611c2f8261141a565b611c398185611c19565b9350611c49818560208601611436565b80840191505092915050565b6000611c618285611c24565b9150611c6d8284611c24565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611cd5602583611425565b9150611ce082611c79565b604082019050919050565b60006020820190508181036000830152611d0481611cc8565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611d67602483611425565b9150611d7282611d0b565b604082019050919050565b60006020820190508181036000830152611d9681611d5a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611dd7826114cc565b9150611de2836114cc565b9250828203905081811115611dfa57611df9611d9d565b5b92915050565b6000611e0b826114cc565b9150611e16836114cc565b9250828201905080821115611e2e57611e2d611d9d565b5b92915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000611e6a601983611425565b9150611e7582611e34565b602082019050919050565b60006020820190508181036000830152611e9981611e5d565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000611efc603283611425565b9150611f0782611ea0565b604082019050919050565b60006020820190508181036000830152611f2b81611eef565b9050919050565b6000611f3d826114cc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f6f57611f6e611d9d565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611fb4826114cc565b9150611fbf836114cc565b925082611fcf57611fce611f7a565b5b828204905092915050565b6000611fe5826114cc565b9150611ff0836114cc565b92508261200057611fff611f7a565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006120618261203a565b61206b8185612045565b935061207b818560208601611436565b61208481611460565b840191505092915050565b60006080820190506120a46000830187611561565b6120b16020830186611561565b6120be6040830185611677565b81810360608301526120d08184612056565b905095945050505050565b6000815190506120ea8161138b565b92915050565b60006020828403121561210657612105611355565b5b6000612114848285016120db565b9150509291505056fea2646970667358221220b539020e066535bc79c5ac3d06ec7e537470862534ee772f2f53e4346ed3fb2364736f6c63430008110033";

type MyERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyERC721__factory extends ContractFactory {
  constructor(...args: MyERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyERC721> {
    return super.deploy(initialSupply, overrides || {}) as Promise<MyERC721>;
  }
  override getDeployTransaction(
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  override attach(address: string): MyERC721 {
    return super.attach(address) as MyERC721;
  }
  override connect(signer: Signer): MyERC721__factory {
    return super.connect(signer) as MyERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyERC721Interface {
    return new utils.Interface(_abi) as MyERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyERC721 {
    return new Contract(address, _abi, signerOrProvider) as MyERC721;
  }
}
