/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockParaSwapTokenTransferProxy } from "./MockParaSwapTokenTransferProxy";

export class MockParaSwapTokenTransferProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockParaSwapTokenTransferProxy> {
    return super.deploy(
      overrides || {}
    ) as Promise<MockParaSwapTokenTransferProxy>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockParaSwapTokenTransferProxy {
    return super.attach(address) as MockParaSwapTokenTransferProxy;
  }
  connect(signer: Signer): MockParaSwapTokenTransferProxyFactory {
    return super.connect(signer) as MockParaSwapTokenTransferProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockParaSwapTokenTransferProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockParaSwapTokenTransferProxy;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b61044d8061007d6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806315dacbea14610051578063715018a6146100665780638da5cb5b1461006e578063f2fde38b1461008c575b600080fd5b61006461005f3660046102dc565b61009f565b005b610064610166565b6100766101e5565b604051610083919061034c565b60405180910390f35b61006461009a3660046102ae565b6101f4565b6100a76102aa565b6000546001600160a01b039081169116146100dd5760405162461bcd60e51b81526004016100d4906103ca565b60405180910390fd5b6040516323b872dd60e01b81526001600160a01b038516906323b872dd9061010d90869086908690600401610360565b602060405180830381600087803b15801561012757600080fd5b505af115801561013b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015f919061032c565b5050505050565b61016e6102aa565b6000546001600160a01b0390811691161461019b5760405162461bcd60e51b81526004016100d4906103ca565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6101fc6102aa565b6000546001600160a01b039081169116146102295760405162461bcd60e51b81526004016100d4906103ca565b6001600160a01b03811661024f5760405162461bcd60e51b81526004016100d490610384565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6000602082840312156102bf578081fd5b81356001600160a01b03811681146102d5578182fd5b9392505050565b600080600080608085870312156102f1578283fd5b84356102fc816103ff565b9350602085013561030c816103ff565b9250604085013561031c816103ff565b9396929550929360600135925050565b60006020828403121561033d578081fd5b815180151581146102d5578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b038116811461041457600080fd5b5056fea2646970667358221220f69d25fcd30d0a08335ceabbd1856efc6aebacb2dbc360ec9766c25b8360152864736f6c634300060c0033";
