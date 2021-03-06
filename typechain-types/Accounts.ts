/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Accounts {
  export type AccountStruct = {
    displayName: string;
    phoneNumber: string;
    email: string;
    photoURL: string;
    role: string;
    isActive: boolean;
    isActivated: boolean;
    affiliate: string;
  };

  export type AccountStructOutput = [
    string,
    string,
    string,
    string,
    string,
    boolean,
    boolean,
    string
  ] & {
    displayName: string;
    phoneNumber: string;
    email: string;
    photoURL: string;
    role: string;
    isActive: boolean;
    isActivated: boolean;
    affiliate: string;
  };
}

export interface AccountsInterface extends utils.Interface {
  contractName: "Accounts";
  functions: {
    "accounts(address)": FunctionFragment;
    "addAccount(address,address,string,string,string,string,string,bool,bool)": FunctionFragment;
    "getAccount(address)": FunctionFragment;
    "kill()": FunctionFragment;
    "updateAccount(address,string,string,string,string,bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "accounts", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addAccount",
    values: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      boolean,
      boolean
    ]
  ): string;
  encodeFunctionData(functionFragment: "getAccount", values: [string]): string;
  encodeFunctionData(functionFragment: "kill", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateAccount",
    values: [string, string, string, string, string, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "accounts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addAccount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAccount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateAccount",
    data: BytesLike
  ): Result;

  events: {
    "AccountAdded(address)": EventFragment;
    "AccountDeleted(address)": EventFragment;
    "AccountUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountUpdated"): EventFragment;
}

export type AccountAddedEvent = TypedEvent<[string], { user: string }>;

export type AccountAddedEventFilter = TypedEventFilter<AccountAddedEvent>;

export type AccountDeletedEvent = TypedEvent<[string], { user: string }>;

export type AccountDeletedEventFilter = TypedEventFilter<AccountDeletedEvent>;

export type AccountUpdatedEvent = TypedEvent<[string], { user: string }>;

export type AccountUpdatedEventFilter = TypedEventFilter<AccountUpdatedEvent>;

export interface Accounts extends BaseContract {
  contractName: "Accounts";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, boolean, boolean, string] & {
        displayName: string;
        phoneNumber: string;
        email: string;
        photoURL: string;
        role: string;
        isActive: boolean;
        isActivated: boolean;
        affiliate: string;
      }
    >;

    addAccount(
      _address: string,
      affiliate: string,
      displayName: string,
      email: string,
      phoneNumber: string,
      photoURL: string,
      role: string,
      isActive: boolean,
      isActivated: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccount(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[Accounts.AccountStructOutput]>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAccount(
      _address: string,
      displayName: string,
      email: string,
      phoneNumber: string,
      photoURL: string,
      isActive: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accounts(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, boolean, boolean, string] & {
      displayName: string;
      phoneNumber: string;
      email: string;
      photoURL: string;
      role: string;
      isActive: boolean;
      isActivated: boolean;
      affiliate: string;
    }
  >;

  addAccount(
    _address: string,
    affiliate: string,
    displayName: string,
    email: string,
    phoneNumber: string,
    photoURL: string,
    role: string,
    isActive: boolean,
    isActivated: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccount(
    _address: string,
    overrides?: CallOverrides
  ): Promise<Accounts.AccountStructOutput>;

  kill(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAccount(
    _address: string,
    displayName: string,
    email: string,
    phoneNumber: string,
    photoURL: string,
    isActive: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, boolean, boolean, string] & {
        displayName: string;
        phoneNumber: string;
        email: string;
        photoURL: string;
        role: string;
        isActive: boolean;
        isActivated: boolean;
        affiliate: string;
      }
    >;

    addAccount(
      _address: string,
      affiliate: string,
      displayName: string,
      email: string,
      phoneNumber: string,
      photoURL: string,
      role: string,
      isActive: boolean,
      isActivated: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAccount(
      _address: string,
      overrides?: CallOverrides
    ): Promise<Accounts.AccountStructOutput>;

    kill(overrides?: CallOverrides): Promise<void>;

    updateAccount(
      _address: string,
      displayName: string,
      email: string,
      phoneNumber: string,
      photoURL: string,
      isActive: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AccountAdded(address)"(user?: null): AccountAddedEventFilter;
    AccountAdded(user?: null): AccountAddedEventFilter;

    "AccountDeleted(address)"(user?: null): AccountDeletedEventFilter;
    AccountDeleted(user?: null): AccountDeletedEventFilter;

    "AccountUpdated(address)"(user?: null): AccountUpdatedEventFilter;
    AccountUpdated(user?: null): AccountUpdatedEventFilter;
  };

  estimateGas: {
    accounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    addAccount(
      _address: string,
      affiliate: string,
      displayName: string,
      email: string,
      phoneNumber: string,
      photoURL: string,
      role: string,
      isActive: boolean,
      isActivated: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccount(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAccount(
      _address: string,
      displayName: string,
      email: string,
      phoneNumber: string,
      photoURL: string,
      isActive: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addAccount(
      _address: string,
      affiliate: string,
      displayName: string,
      email: string,
      phoneNumber: string,
      photoURL: string,
      role: string,
      isActive: boolean,
      isActivated: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccount(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAccount(
      _address: string,
      displayName: string,
      email: string,
      phoneNumber: string,
      photoURL: string,
      isActive: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
