/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { IERC20DetailedBytes } from "./IERC20DetailedBytes";

export class IERC20DetailedBytesFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<IERC20DetailedBytes> {
    return super.deploy(overrides || {}) as Promise<IERC20DetailedBytes>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IERC20DetailedBytes {
    return super.attach(address) as IERC20DetailedBytes;
  }
  connect(signer: Signer): IERC20DetailedBytesFactory {
    return super.connect(signer) as IERC20DetailedBytesFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC20DetailedBytes {
    return new Contract(address, _abi, signerOrProvider) as IERC20DetailedBytes;
  }
}

const _abi = [
  {
    inputs: [],
    name: "decimals",
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
    name: "name",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060ad8061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c806306fdde03146041578063313ce56714605957806395d89b4114605f575b600080fd5b60476065565b60408051918252519081900360200190f35b6047606b565b60476071565b60005481565b60025481565b6001548156fea26469706673582212201f0b3493f4ced1bab6b3983e3186177c0c2368503b4d9d03066b9db0205c4c5464736f6c634300060c0033";
