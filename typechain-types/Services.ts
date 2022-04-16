/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export declare namespace Services {
  export type FeeStruct = {
    name: string;
    cost: BigNumberish;
    index: BigNumberish;
  };

  export type FeeStructOutput = [string, BigNumber, BigNumber] & {
    name: string;
    cost: BigNumber;
    index: BigNumber;
  };
}

export interface ServicesInterface extends utils.Interface {
  contractName: "Services";
  functions: {
    "accountsAddress()": FunctionFragment;
    "addService(string,uint256)": FunctionFragment;
    "deleteService(uint256)": FunctionFragment;
    "getService(uint256)": FunctionFragment;
    "getServices(address)": FunctionFragment;
    "getTotal(address)": FunctionFragment;
    "kill()": FunctionFragment;
    "updateService(string,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountsAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addService",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteService",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getService",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getServices", values: [string]): string;
  encodeFunctionData(functionFragment: "getTotal", values: [string]): string;
  encodeFunctionData(functionFragment: "kill", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateService",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountsAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addService", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deleteService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getService", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getServices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTotal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateService",
    data: BytesLike
  ): Result;

  events: {
    "ServiceAdded(address)": EventFragment;
    "ServiceDeleted(address)": EventFragment;
    "ServiceUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ServiceAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ServiceDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ServiceUpdated"): EventFragment;
}

export type ServiceAddedEvent = TypedEvent<[string], { user: string }>;

export type ServiceAddedEventFilter = TypedEventFilter<ServiceAddedEvent>;

export type ServiceDeletedEvent = TypedEvent<[string], { user: string }>;

export type ServiceDeletedEventFilter = TypedEventFilter<ServiceDeletedEvent>;

export type ServiceUpdatedEvent = TypedEvent<[string], { user: string }>;

export type ServiceUpdatedEventFilter = TypedEventFilter<ServiceUpdatedEvent>;

export interface Services extends BaseContract {
  contractName: "Services";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ServicesInterface;

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
    accountsAddress(overrides?: CallOverrides): Promise<[string]>;

    addService(
      name: string,
      cost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteService(
      _index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getService(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Services.FeeStructOutput]>;

    getServices(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[Services.FeeStructOutput[]]>;

    getTotal(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateService(
      name: string,
      cost: BigNumberish,
      index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accountsAddress(overrides?: CallOverrides): Promise<string>;

  addService(
    name: string,
    cost: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteService(
    _index: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getService(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Services.FeeStructOutput>;

  getServices(
    _address: string,
    overrides?: CallOverrides
  ): Promise<Services.FeeStructOutput[]>;

  getTotal(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

  kill(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateService(
    name: string,
    cost: BigNumberish,
    index: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accountsAddress(overrides?: CallOverrides): Promise<string>;

    addService(
      name: string,
      cost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deleteService(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getService(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Services.FeeStructOutput>;

    getServices(
      _address: string,
      overrides?: CallOverrides
    ): Promise<Services.FeeStructOutput[]>;

    getTotal(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    kill(overrides?: CallOverrides): Promise<void>;

    updateService(
      name: string,
      cost: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ServiceAdded(address)"(user?: null): ServiceAddedEventFilter;
    ServiceAdded(user?: null): ServiceAddedEventFilter;

    "ServiceDeleted(address)"(user?: null): ServiceDeletedEventFilter;
    ServiceDeleted(user?: null): ServiceDeletedEventFilter;

    "ServiceUpdated(address)"(user?: null): ServiceUpdatedEventFilter;
    ServiceUpdated(user?: null): ServiceUpdatedEventFilter;
  };

  estimateGas: {
    accountsAddress(overrides?: CallOverrides): Promise<BigNumber>;

    addService(
      name: string,
      cost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteService(
      _index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getService(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getServices(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotal(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateService(
      name: string,
      cost: BigNumberish,
      index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accountsAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addService(
      name: string,
      cost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteService(
      _index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getService(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getServices(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotal(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateService(
      name: string,
      cost: BigNumberish,
      index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}