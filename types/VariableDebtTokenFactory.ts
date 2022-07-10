/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { VariableDebtToken } from "./VariableDebtToken";

export class VariableDebtTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<VariableDebtToken> {
    return super.deploy(overrides || {}) as Promise<VariableDebtToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VariableDebtToken {
    return super.attach(address) as VariableDebtToken;
  }
  connect(signer: Signer): VariableDebtTokenFactory {
    return super.connect(signer) as VariableDebtTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VariableDebtToken {
    return new Contract(address, _abi, signerOrProvider) as VariableDebtToken;
  }
}

const _abi = [
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "fromUser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toUser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BorrowAllowanceDelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "incentivesController",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "debtTokenDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "debtTokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "debtTokenSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "Initialized",
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
        name: "onBehalfOf",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Mint",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEBT_TOKEN_REVISION",
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
    name: "POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNDERLYING_ASSET_ADDRESS",
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
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
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
        internalType: "address",
        name: "fromUser",
        type: "address",
      },
      {
        internalType: "address",
        name: "toUser",
        type: "address",
      },
    ],
    name: "borrowAllowance",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    name: "getIncentivesController",
    outputs: [
      {
        internalType: "contract IAaveIncentivesController",
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
        name: "user",
        type: "address",
      },
    ],
    name: "getScaledUserBalanceAndSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [
      {
        internalType: "contract ILendingPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "contract IAaveIncentivesController",
        name: "incentivesController",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "debtTokenDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "debtTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "debtTokenSymbol",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "mint",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "scaledBalanceOf",
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
    name: "scaledTotalSupply",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x608060405260006006553480156200001657600080fd5b50604080518082018252600e8082526d111150951513d2d15397d253541360921b60208084018281528551808701909652928552840152815191929160009162000064916003919062000098565b5081516200007a90600490602085019062000098565b506005805460ff191660ff9290921691909117905550620001349050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000db57805160ff19168380011785556200010b565b828001600101855582156200010b579182015b828111156200010b578251825591602001919060010190620000ee565b50620001199291506200011d565b5090565b5b808211156200011957600081556001016200011e565b6117bb80620001446000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806375d26413116100c3578063b3f1c93d1161007c578063b3f1c93d146103d2578063b9a7b6221461040e578063c04a8a1014610416578063c222ec8a14610444578063dd62ed3e146105e7578063f5298aca146106155761014d565b806375d264131461038657806395d89b411461038e578063a457c2d7146102e2578063a9059cbb14610396578063b16a19de146103c2578063b1bf962d146103ca5761014d565b806323b872dd1161011557806323b872dd1461028e578063313ce567146102c457806339509351146102e25780636bd76d241461030e57806370a082311461033c5780637535d246146103625761014d565b806306fdde0314610152578063095ea7b3146101cf5780630afbcdc91461020f57806318160ddd1461024e5780631da24f3e14610268575b600080fd5b61015a610647565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019457818101518382015260200161017c565b50505050905090810190601f1680156101c15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101fb600480360360408110156101e557600080fd5b506001600160a01b0381351690602001356106dd565b604080519115158252519081900360200190f35b6102356004803603602081101561022557600080fd5b50356001600160a01b0316610725565b6040805192835260208301919091528051918290030190f35b610256610742565b60408051918252519081900360200190f35b6102566004803603602081101561027e57600080fd5b50356001600160a01b03166107d5565b6101fb600480360360608110156102a457600080fd5b506001600160a01b038135811691602081013590911690604001356107e8565b6102cc610830565b6040805160ff9092168252519081900360200190f35b6101fb600480360360408110156102f857600080fd5b506001600160a01b038135169060200135610839565b6102566004803603604081101561032457600080fd5b506001600160a01b0381358116916020013516610882565b6102566004803603602081101561035257600080fd5b50356001600160a01b03166108af565b61036a61095b565b604080516001600160a01b039092168252519081900360200190f35b61036a61096a565b61015a610974565b6101fb600480360360408110156103ac57600080fd5b506001600160a01b0381351690602001356107e8565b61036a6109d5565b6102566109e4565b6101fb600480360360808110156103e857600080fd5b506001600160a01b038135811691602081013590911690604081013590606001356109ee565b610256610c07565b6104426004803603604081101561042c57600080fd5b506001600160a01b038135169060200135610c0c565b005b610442600480360360e081101561045a57600080fd5b6001600160a01b038235811692602081013582169260408201359092169160ff606083013516919081019060a081016080820135600160201b81111561049f57600080fd5b8201836020820111156104b157600080fd5b803590602001918460018302840111600160201b831117156104d257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561052457600080fd5b82018360208201111561053657600080fd5b803590602001918460018302840111600160201b8311171561055757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156105a957600080fd5b8201836020820111156105bb57600080fd5b803590602001918460018302840111600160201b831117156105dc57600080fd5b509092509050610ca8565b610256600480360360408110156105fd57600080fd5b506001600160a01b0381358116916020013516610839565b6104426004803603606081101561062b57600080fd5b506001600160a01b038135169060208101359060400135610ef7565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106d35780601f106106a8576101008083540402835291602001916106d3565b820191906000526020600020905b8154815290600101906020018083116106b657829003601f168201915b5050505050905090565b6040805162461bcd60e51b81526020600482015260166024820152751054141493d5905317d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b6000806107318361108b565b6107396110a6565b91509150915091565b603b54603c546040805163386497fd60e01b81526001600160a01b03928316600482015290516000936107d093169163386497fd916024808301926020929190829003018186803b15801561079657600080fd5b505afa1580156107aa573d6000803e3d6000fd5b505050506040513d60208110156107c057600080fd5b50516107ca6110a6565b906110ac565b905090565b60006107e08261108b565b90505b919050565b6040805162461bcd60e51b81526020600482015260166024820152751514905394d1915497d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60055460ff1690565b6040805162461bcd60e51b815260206004820152601760248201527610531313d5d05390d157d393d517d4d5541413d4951151604a1b6044820152905160009181900360640190fd5b6001600160a01b038083166000908152603a60209081526040808320938516835292905220545b92915050565b6000806108bb8361108b565b9050806108cc5760009150506107e3565b603b54603c546040805163386497fd60e01b81526001600160a01b039283166004820152905161095493929092169163386497fd91602480820192602092909190829003018186803b15801561092157600080fd5b505afa158015610935573d6000803e3d6000fd5b505050506040513d602081101561094b57600080fd5b505182906110ac565b9392505050565b603b546001600160a01b031690565b60006107d061116a565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106d35780601f106106a8576101008083540402835291602001916106d3565b603c546001600160a01b031690565b60006107d06110a6565b60006109f861095b565b6001600160a01b0316610a09611179565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610ab75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a7c578181015183820152602001610a64565b50505050905090810190601f168015610aa95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50836001600160a01b0316856001600160a01b031614610adc57610adc84868561117d565b6000610ae78561108b565b90506000610af58585611245565b6040805180820190915260028152611a9b60f11b602082015290915081610b5d5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a7c578181015183820152602001610a64565b50610b68868261134c565b6040805186815290516001600160a01b038816916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3856001600160a01b0316876001600160a01b03167f2f00e3cdd69a77be7ed215ec7b2a36784dd158f921fca79ac29deffa353fe6ee8787604051808381526020018281526020019250505060405180910390a3501595945050505050565b600181565b80603a6000610c19611179565b6001600160a01b0390811682526020808301939093526040918201600090812091871680825291909352912091909155610c51611179565b6001600160a01b03167fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1610c836109d5565b604080516001600160a01b039092168252602082018690528051918290030190a35050565b6000610cb261149d565b60075490915060ff1680610cc95750610cc96114a2565b80610cd5575060065481115b610d105760405162461bcd60e51b815260040180806020018281038252602e815260200180611737602e913960400191505060405180910390fd5b60075460ff16158015610d30576007805460ff1916600117905560068290555b610d39866114a8565b610d42856114bf565b610d4b876114d2565b603b80546001600160a01b03808d166001600160a01b03199283168117909355603c80548d83169084168117909155603d8054928d169290931682179092556040805191825260ff8b1660208084019190915260a09183018281528b51928401929092528a517f40251fbfb6656cfa65a00d7879029fec1fad21d28fdcff2f4f68f52795b74f2c938e938e938e938e938e938e93919290916060840191608085019160c0860191908a019080838360005b83811015610e14578181015183820152602001610dfc565b50505050905090810190601f168015610e415780820380516001836020036101000a031916815260200191505b50848103835287518152875160209182019189019080838360005b83811015610e74578181015183820152602001610e5c565b50505050905090810190601f168015610ea15780820380516001836020036101000a031916815260200191505b508481038252858152602001868680828437600083820152604051601f909101601f19169092018290039b50909950505050505050505050a38015610eeb576007805460ff191690555b50505050505050505050565b610eff61095b565b6001600160a01b0316610f10611179565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610f815760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a7c578181015183820152602001610a64565b506000610f8e8383611245565b60408051808201909152600281526106a760f31b602082015290915081610ff65760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a7c578181015183820152602001610a64565b5061100184826114e8565b6040805184815290516000916001600160a01b038716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3604080518481526020810184905281516001600160a01b038716927f49995e5dd6158cf69ad3e9777c46755a1a826a446c6416992167462dad033b2a928290030190a250505050565b6001600160a01b031660009081526020819052604090205490565b60025490565b60008215806110b9575081155b156110c6575060006108a9565b816b019d971e4fe8401e7400000019816110dc57fe5b0483111560405180604001604052806002815260200161068760f31b815250906111475760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a7c578181015183820152602001610a64565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b603d546001600160a01b031690565b3390565b6040805180820182526002815261353960f01b6020808301919091526001600160a01b038087166000908152603a835284812091871681529152918220546111c6918490611586565b6001600160a01b038086166000818152603a60209081526040808320948916808452949091529020839055919250907fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e161121e6109d5565b604080516001600160a01b039092168252602082018690528051918290030190a350505050565b604080518082019091526002815261035360f41b6020820152600090826112ad5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a7c578181015183820152602001610a64565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce80000008219048511156113295760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a7c578181015183820152602001610a64565b5082816b033b2e3c9fd0803ce80000008602018161134357fe5b04949350505050565b6001600160a01b0382166113a7576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6113b3600083836115e0565b6002546113c081836115e5565b6002556001600160a01b0383166000908152602081905260409020546113e681846115e5565b6001600160a01b03851660009081526020819052604081209190915561140a61116a565b6001600160a01b0316146114975761142061116a565b6001600160a01b03166331873e2e8584846040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b15801561147e57600080fd5b505af1158015611492573d6000803e3d6000fd5b505050505b50505050565b600190565b303b1590565b80516114bb906003906020840190611681565b5050565b80516114bb906004906020840190611681565b6005805460ff191660ff92909216919091179055565b6001600160a01b03821661152d5760405162461bcd60e51b81526004018080602001828103825260218152602001806117656021913960400191505060405180910390fd5b611539826000836115e0565b600254611546818361163f565b6002556001600160a01b0383166000908152602081815260409182902054825160608101909352602280845290926113e692869290611715908301398391905b600081848411156115d85760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a7c578181015183820152602001610a64565b505050900390565b505050565b600082820183811015610954576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061095483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611586565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106116c257805160ff19168380011785556116ef565b828001600101855582156116ef579182015b828111156116ef5782518255916020019190600101906116d4565b506116fb9291506116ff565b5090565b5b808211156116fb576000815560010161170056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656445524332303a206275726e2066726f6d20746865207a65726f2061646472657373a26469706673582212200c9ed07215fd095fd51ef7eb2c0c1718c1e3eb861d8adcb5e809593333f7c78864736f6c634300060c0033";