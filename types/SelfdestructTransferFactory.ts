/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SelfdestructTransfer } from "./SelfdestructTransfer";

export class SelfdestructTransferFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SelfdestructTransfer> {
    return super.deploy(overrides || {}) as Promise<SelfdestructTransfer>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SelfdestructTransfer {
    return super.attach(address) as SelfdestructTransfer;
  }
  connect(signer: Signer): SelfdestructTransferFactory {
    return super.connect(signer) as SelfdestructTransferFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SelfdestructTransfer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SelfdestructTransfer;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "destroyAndTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060888061001e6000396000f3fe608060405260043610601c5760003560e01c8063785e07b3146021575b600080fd5b604460048036036020811015603557600080fd5b50356001600160a01b03166046565b005b806001600160a01b0316fffea2646970667358221220daffc032e324e6fdfc369af8810e464514981df001f179a90e447fb76fc7573d64736f6c634300060c0033";