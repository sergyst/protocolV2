/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PermissionManagerInterface extends ethers.utils.Interface {
  functions: {
    "MAX_NUM_OF_ROLES()": FunctionFragment;
    "addPermissionAdmins(address[])": FunctionFragment;
    "addPermissions(uint256[],address[])": FunctionFragment;
    "getUserPermissionAdmin(address)": FunctionFragment;
    "getUserPermissions(address)": FunctionFragment;
    "isInAllRoles(address,uint256[])": FunctionFragment;
    "isInAnyRole(address,uint256[])": FunctionFragment;
    "isInRole(address,uint256)": FunctionFragment;
    "isPermissionsAdmin(address)": FunctionFragment;
    "isUserPermissionAdminValid(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removePermissionAdmins(address[])": FunctionFragment;
    "removePermissions(uint256[],address[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_NUM_OF_ROLES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addPermissionAdmins",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addPermissions",
    values: [BigNumberish[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserPermissionAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserPermissions",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isInAllRoles",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isInAnyRole",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isInRole",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isPermissionsAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isUserPermissionAdminValid",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removePermissionAdmins",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removePermissions",
    values: [BigNumberish[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_NUM_OF_ROLES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPermissionAdmins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserPermissionAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInAllRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInAnyRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isInRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPermissionsAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUserPermissionAdminValid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removePermissionAdmins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PermissionsAdminSet(address,bool)": EventFragment;
    "RoleSet(address,uint256,address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PermissionsAdminSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleSet"): EventFragment;
}

export class PermissionManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PermissionManagerInterface;

  functions: {
    MAX_NUM_OF_ROLES(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "MAX_NUM_OF_ROLES()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    addPermissionAdmins(
      admins: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addPermissionAdmins(address[])"(
      admins: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addPermissions(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addPermissions(uint256[],address[])"(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getUserPermissionAdmin(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getUserPermissionAdmin(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getUserPermissions(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
      1: BigNumber;
    }>;

    "getUserPermissions(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
      1: BigNumber;
    }>;

    isInAllRoles(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isInAllRoles(address,uint256[])"(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isInAnyRole(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isInAnyRole(address,uint256[])"(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isInRole(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isInRole(address,uint256)"(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isPermissionsAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isPermissionsAdmin(address)"(
      admin: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isUserPermissionAdminValid(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isUserPermissionAdminValid(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    removePermissionAdmins(
      admins: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removePermissionAdmins(address[])"(
      admins: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removePermissions(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removePermissions(uint256[],address[])"(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  MAX_NUM_OF_ROLES(overrides?: CallOverrides): Promise<BigNumber>;

  "MAX_NUM_OF_ROLES()"(overrides?: CallOverrides): Promise<BigNumber>;

  addPermissionAdmins(
    admins: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addPermissionAdmins(address[])"(
    admins: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addPermissions(
    roles: BigNumberish[],
    users: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addPermissions(uint256[],address[])"(
    roles: BigNumberish[],
    users: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getUserPermissionAdmin(
    user: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getUserPermissionAdmin(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getUserPermissions(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber[];
    1: BigNumber;
  }>;

  "getUserPermissions(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber[];
    1: BigNumber;
  }>;

  isInAllRoles(
    user: string,
    roles: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isInAllRoles(address,uint256[])"(
    user: string,
    roles: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  isInAnyRole(
    user: string,
    roles: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isInAnyRole(address,uint256[])"(
    user: string,
    roles: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  isInRole(
    user: string,
    role: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isInRole(address,uint256)"(
    user: string,
    role: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPermissionsAdmin(
    admin: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isPermissionsAdmin(address)"(
    admin: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isUserPermissionAdminValid(
    user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isUserPermissionAdminValid(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  removePermissionAdmins(
    admins: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removePermissionAdmins(address[])"(
    admins: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removePermissions(
    roles: BigNumberish[],
    users: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removePermissions(uint256[],address[])"(
    roles: BigNumberish[],
    users: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    MAX_NUM_OF_ROLES(overrides?: CallOverrides): Promise<BigNumber>;

    "MAX_NUM_OF_ROLES()"(overrides?: CallOverrides): Promise<BigNumber>;

    addPermissionAdmins(
      admins: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "addPermissionAdmins(address[])"(
      admins: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addPermissions(
      roles: BigNumberish[],
      users: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "addPermissions(uint256[],address[])"(
      roles: BigNumberish[],
      users: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    getUserPermissionAdmin(
      user: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getUserPermissionAdmin(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getUserPermissions(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
      1: BigNumber;
    }>;

    "getUserPermissions(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
      1: BigNumber;
    }>;

    isInAllRoles(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isInAllRoles(address,uint256[])"(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    isInAnyRole(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isInAnyRole(address,uint256[])"(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    isInRole(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isInRole(address,uint256)"(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPermissionsAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isPermissionsAdmin(address)"(
      admin: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isUserPermissionAdminValid(
      user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isUserPermissionAdminValid(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removePermissionAdmins(
      admins: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "removePermissionAdmins(address[])"(
      admins: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    removePermissions(
      roles: BigNumberish[],
      users: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "removePermissions(uint256[],address[])"(
      roles: BigNumberish[],
      users: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    PermissionsAdminSet(user: string | null, set: null): EventFilter;

    RoleSet(
      user: string | null,
      role: BigNumberish | null,
      whiteLister: string | null,
      set: null
    ): EventFilter;
  };

  estimateGas: {
    MAX_NUM_OF_ROLES(overrides?: CallOverrides): Promise<BigNumber>;

    "MAX_NUM_OF_ROLES()"(overrides?: CallOverrides): Promise<BigNumber>;

    addPermissionAdmins(
      admins: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addPermissionAdmins(address[])"(
      admins: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    addPermissions(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addPermissions(uint256[],address[])"(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    getUserPermissionAdmin(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserPermissionAdmin(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserPermissions(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserPermissions(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInAllRoles(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isInAllRoles(address,uint256[])"(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInAnyRole(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isInAnyRole(address,uint256[])"(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInRole(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isInRole(address,uint256)"(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPermissionsAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isPermissionsAdmin(address)"(
      admin: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUserPermissionAdminValid(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isUserPermissionAdminValid(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    removePermissionAdmins(
      admins: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removePermissionAdmins(address[])"(
      admins: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    removePermissions(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removePermissions(uint256[],address[])"(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_NUM_OF_ROLES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MAX_NUM_OF_ROLES()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addPermissionAdmins(
      admins: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addPermissionAdmins(address[])"(
      admins: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addPermissions(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addPermissions(uint256[],address[])"(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getUserPermissionAdmin(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserPermissionAdmin(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserPermissions(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserPermissions(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInAllRoles(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isInAllRoles(address,uint256[])"(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInAnyRole(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isInAnyRole(address,uint256[])"(
      user: string,
      roles: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInRole(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isInRole(address,uint256)"(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPermissionsAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPermissionsAdmin(address)"(
      admin: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isUserPermissionAdminValid(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isUserPermissionAdminValid(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removePermissionAdmins(
      admins: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removePermissionAdmins(address[])"(
      admins: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removePermissions(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removePermissions(uint256[],address[])"(
      roles: BigNumberish[],
      users: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
