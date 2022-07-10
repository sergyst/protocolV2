/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockUniswapV2Router02 } from "./MockUniswapV2Router02";

export class MockUniswapV2Router02Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockUniswapV2Router02> {
    return super.deploy(overrides || {}) as Promise<MockUniswapV2Router02>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockUniswapV2Router02 {
    return super.attach(address) as MockUniswapV2Router02;
  }
  connect(signer: Signer): MockUniswapV2Router02Factory {
    return super.connect(signer) as MockUniswapV2Router02Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockUniswapV2Router02 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockUniswapV2Router02;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "getAmountsIn",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reserveIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "reserveOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "setAmountIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reserveIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "reserveOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "setAmountOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setAmountToReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setAmountToSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setDefaultMockValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610dcd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c80631f00ca741461008857806338ed17391461014d5780635186725f146101d65780635fdcafc8146102045780638803dbee146102405780639da23949146102c9578063d06ca61f14610305578063ee92b8591461037a578063fcaf206c14610397575b600080fd5b6100fd6004803603604081101561009e57600080fd5b81359190810190604081016020820135600160201b8111156100bf57600080fd5b8201836020820111156100d157600080fd5b803590602001918460208302840111600160201b831117156100f257600080fd5b5090925090506103c3565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610139578181015183820152602001610121565b505050509050019250505060405180910390f35b6100fd600480360360a081101561016357600080fd5b813591602081013591810190606081016040820135600160201b81111561018957600080fd5b82018360208201111561019b57600080fd5b803590602001918460208302840111600160201b831117156101bc57600080fd5b91935091506001600160a01b038135169060200135610578565b610202600480360360408110156101ec57600080fd5b506001600160a01b038135169060200135610880565b005b6102026004803603608081101561021a57600080fd5b508035906001600160a01b0360208201358116916040810135909116906060013561089c565b6100fd600480360360a081101561025657600080fd5b813591602081013591810190606081016040820135600160201b81111561027c57600080fd5b82018360208201111561028e57600080fd5b803590602001918460208302840111600160201b831117156102af57600080fd5b91935091506001600160a01b0381351690602001356108d0565b610202600480360360808110156102df57600080fd5b508035906001600160a01b03602082013581169160408101359091169060600135610ba0565b6100fd6004803603604081101561031b57600080fd5b81359190810190604081016020820135600160201b81111561033c57600080fd5b82018360208201111561034e57600080fd5b803590602001918460208302840111600160201b8311171561036f57600080fd5b509092509050610bd4565b6102026004803603602081101561039057600080fd5b5035610d76565b610202600480360360408110156103ad57600080fd5b506001600160a01b038135169060200135610d7b565b6060808267ffffffffffffffff811180156103dd57600080fd5b50604051908082528060200260200182016040528015610407578160200160208202803683370190505b5090506000600260008686600081811061041d57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060008686600181811061045c57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b03168152602001908152602001600020600087815260200190815260200160002054116104ab5760045461053e565b60026000858560008181106104bc57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b031681526020019081526020016000206000858560018181106104fb57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b031681526020019081526020016000206000868152602001908152602001600020545b8160008151811061054b57fe5b602002602001018181525050848160018151811061056557fe5b6020908102919091010152949350505050565b60608484600081811061058757fe5b604080516323b872dd60e01b8152336004820152306024820152604481018c90529051602092830294909401356001600160a01b0316936323b872dd9350606480830193928290030181600087803b1580156105e257600080fd5b505af11580156105f6573d6000803e3d6000fd5b505050506040513d602081101561060c57600080fd5b5085905084600181811061061c57fe5b905060200201356001600160a01b03166001600160a01b031663a0712d686000808888600081811061064a57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b03168152602001908152602001600020546040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156106b157600080fd5b505af11580156106c5573d6000803e3d6000fd5b505050506040513d60208110156106db57600080fd5b508590508460018181106106eb57fe5b905060200201356001600160a01b03166001600160a01b031663a9059cbb846000808989600081811061071a57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b03168152602001908152602001600020546040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561079157600080fd5b505af11580156107a5573d6000803e3d6000fd5b505050506040513d60208110156107bb57600080fd5b5084905067ffffffffffffffff811180156107d557600080fd5b506040519080825280602002602001820160405280156107ff578160200160208202803683370190505b509050868160008151811061081057fe5b6020026020010181815250506000808686600081811061082c57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b03168152602001908152602001600020548160018151811061086a57fe5b6020026020010181815250509695505050505050565b6001600160a01b03909116600090815260208190526040902055565b6001600160a01b03928316600090815260036020908152604080832094909516825292835283812094815293909152912055565b6060848460008181106108df57fe5b905060200201356001600160a01b03166001600160a01b03166323b872dd3330600160008a8a600081811061091057fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b03168152602001908152602001600020546040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b15801561099757600080fd5b505af11580156109ab573d6000803e3d6000fd5b505050506040513d60208110156109c157600080fd5b508590508460018181106109d157fe5b905060200201356001600160a01b03166001600160a01b031663a0712d68886040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610a2657600080fd5b505af1158015610a3a573d6000803e3d6000fd5b505050506040513d6020811015610a5057600080fd5b50859050846001818110610a6057fe5b905060200201356001600160a01b03166001600160a01b031663a9059cbb84896040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610ac657600080fd5b505af1158015610ada573d6000803e3d6000fd5b505050506040513d6020811015610af057600080fd5b5084905067ffffffffffffffff81118015610b0a57600080fd5b50604051908082528060200260200182016040528015610b34578160200160208202803683370190505b5090506001600086866000818110610b4857fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b031681526020019081526020016000205481600081518110610b8657fe5b602002602001018181525050868160018151811061086a57fe5b6001600160a01b03928316600090815260026020908152604080832094909516825292835283812094815293909152912055565b6060808267ffffffffffffffff81118015610bee57600080fd5b50604051908082528060200260200182016040528015610c18578160200160208202803683370190505b5090508481600081518110610c2957fe5b60200260200101818152505060006003600086866000818110610c4857fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b03168152602001908152602001600020600086866001818110610c8757fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060008781526020019081526020016000205411610cd657600454610d69565b6003600085856000818110610ce757fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b03168152602001908152602001600020600085856001818110610d2657fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b031681526020019081526020016000206000868152602001908152602001600020545b8160018151811061056557fe5b600455565b6001600160a01b0390911660009081526001602052604090205556fea2646970667358221220d88393d26f4e99e16685eb12fcd749d5d1f8c089469e7f2cac3bffe8ed18402064736f6c634300060c0033";
