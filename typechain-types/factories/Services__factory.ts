/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Services, ServicesInterface } from "../Services";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "acctAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ServiceAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ServiceDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ServiceUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "accountsAddress",
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
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    name: "addService",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "deleteService",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getService",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        internalType: "struct Services.Fee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getServices",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        internalType: "struct Services.Fee[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getTotal",
    outputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kill",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "updateService",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ec438038062001ec48339818101604052810190620000379190620000d6565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000150565b600081519050620000d08162000136565b92915050565b600060208284031215620000e957600080fd5b6000620000f984828501620000bf565b91505092915050565b60006200010f8262000116565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001418162000102565b81146200014d57600080fd5b50565b611d6480620001606000396000f3fe60806040526004361061007b5760003560e01c8063b2532a451161004e578063b2532a4514610115578063cc1a40b714610152578063ebb6dad814610182578063ef0e239b146101bf5761007b565b806341c0e1b51461008057806355cd79471461008a57806374e29ee6146100b5578063a6ffc2d3146100e5575b600080fd5b6100886101fc565b005b34801561009657600080fd5b5061009f6102c3565b6040516100ac91906118d8565b60405180910390f35b6100cf60048036038101906100ca919061166f565b6102e9565b6040516100dc9190611915565b60405180910390f35b6100ff60048036038101906100fa91906115c7565b610783565b60405161010c9190611915565b60405180910390f35b34801561012157600080fd5b5061013c60048036038101906101379190611521565b610a17565b60405161014991906118f3565b60405180910390f35b61016c60048036038101906101679190611573565b610b5e565b6040516101799190611915565b60405180910390f35b34801561018e57600080fd5b506101a960048036038101906101a49190611521565b610e1e565b6040516101b691906119c7565b60405180910390f35b3480156101cb57600080fd5b506101e660048036038101906101e1919061166f565b610e6d565b6040516101f391906119a5565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461028a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028190611985565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073__$1c41232b8c3f9382c4bdca1a05a1ab00e7$__63465c4105600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fbcbc0f1336040518263ffffffff1660e01b815260040161036091906118d8565b60006040518083038186803b15801561037857600080fd5b505afa15801561038c573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103b5919061162e565b608001516040518263ffffffff1660e01b81526004016103d59190611930565b60206040518083038186803b1580156103ed57600080fd5b505af4158015610401573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610425919061154a565b610464576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045b90611965565b60405180910390fd5b7f79482e43d291b9a6d64e94d0cf51961021b99f6725377b2b4854512224f1514a3360405161049391906118d8565b60405180910390a160006001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805490506104ef9190611aaf565b905082600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001828154811061056c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160020181905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181815481106105fb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018481548110610683577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160008201816000019080546106a590611b6d565b6106b092919061112e565b506001820154816001015560028201548160020155905050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805480610740577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60019003818190600052602060002090600302016000808201600061076591906111bb565b60018201600090556002820160009055505090556001915050919050565b600073__$1c41232b8c3f9382c4bdca1a05a1ab00e7$__63465c4105600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fbcbc0f1336040518263ffffffff1660e01b81526004016107fa91906118d8565b60006040518083038186803b15801561081257600080fd5b505afa158015610826573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061084f919061162e565b608001516040518263ffffffff1660e01b815260040161086f9190611930565b60206040518083038186803b15801561088757600080fd5b505af415801561089b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bf919061154a565b6108fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f590611965565b60405180910390fd5b7f0176c74b9bca78214099248dd4e675a4be45c1f7417e269f78ef97e96ece2a513360405161092d91906118d8565b60405180910390a1604051806060016040528085815260200184815260200183815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000183815481106109ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160008201518160000190805190602001906109f49291906111fb565b506020820151816001015560408201518160020155905050600190509392505050565b6060600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805480602002602001604051908101604052809291908181526020016000905b82821015610b535783829060005260206000209060030201604051806060016040529081600082018054610aae90611b6d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ada90611b6d565b8015610b275780601f10610afc57610100808354040283529160200191610b27565b820191906000526020600020905b815481529060010190602001808311610b0a57829003601f168201915b505050505081526020016001820154815260200160028201548152505081526020019060010190610a7b565b505050509050919050565b600073__$1c41232b8c3f9382c4bdca1a05a1ab00e7$__63465c4105600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fbcbc0f1336040518263ffffffff1660e01b8152600401610bd591906118d8565b60006040518083038186803b158015610bed57600080fd5b505afa158015610c01573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610c2a919061162e565b608001516040518263ffffffff1660e01b8152600401610c4a9190611930565b60206040518083038186803b158015610c6257600080fd5b505af4158015610c76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9a919061154a565b610cd9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd090611965565b60405180910390fd5b7fc917ab672aa101ddaa2e4db6de34f67d180098d502a2ed9e199f79b4c4333a6b33604051610d0891906118d8565b60405180910390a16000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805490509050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160405180606001604052808681526020018581526020018381525090806001815401808255809150506001900390600052602060002090600302016000909190919091506000820151816000019080519060200190610dfc9291906111fb565b5060208201518160010155604082015181600201555050600191505092915050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805490509050919050565b610e75611281565b73__$1c41232b8c3f9382c4bdca1a05a1ab00e7$__63465c4105600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fbcbc0f1336040518263ffffffff1660e01b8152600401610eea91906118d8565b60006040518083038186803b158015610f0257600080fd5b505afa158015610f16573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610f3f919061162e565b608001516040518263ffffffff1660e01b8152600401610f5f9190611930565b60206040518083038186803b158015610f7757600080fd5b505af4158015610f8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610faf919061154a565b610fee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe590611965565b60405180910390fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018281548110611068577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160405180606001604052908160008201805461109190611b6d565b80601f01602080910402602001604051908101604052809291908181526020018280546110bd90611b6d565b801561110a5780601f106110df5761010080835404028352916020019161110a565b820191906000526020600020905b8154815290600101906020018083116110ed57829003601f168201915b50505050508152602001600182015481526020016002820154815250509050919050565b82805461113a90611b6d565b90600052602060002090601f01602090048101928261115c57600085556111aa565b82601f1061116d57805485556111aa565b828001600101855582156111aa57600052602060002091601f016020900482015b828111156111a957825482559160010191906001019061118e565b5b5090506111b791906112a2565b5090565b5080546111c790611b6d565b6000825580601f106111d957506111f8565b601f0160209004906000526020600020908101906111f791906112a2565b5b50565b82805461120790611b6d565b90600052602060002090601f0160209004810192826112295760008555611270565b82601f1061124257805160ff1916838001178555611270565b82800160010185558215611270579182015b8281111561126f578251825591602001919060010190611254565b5b50905061127d91906112a2565b5090565b60405180606001604052806060815260200160008152602001600081525090565b5b808211156112bb5760008160009055506001016112a3565b5090565b60006112d26112cd84611a07565b6119e2565b9050828152602081018484840111156112ea57600080fd5b6112f5848285611b2b565b509392505050565b600061131061130b84611a07565b6119e2565b90508281526020810184848401111561132857600080fd5b611333848285611b3a565b509392505050565b60008135905061134a81611ce9565b92915050565b60008151905061135f81611ce9565b92915050565b60008151905061137481611d00565b92915050565b600082601f83011261138b57600080fd5b813561139b8482602086016112bf565b91505092915050565b600082601f8301126113b557600080fd5b81516113c58482602086016112fd565b91505092915050565b600061010082840312156113e157600080fd5b6113ec6101006119e2565b9050600082015167ffffffffffffffff81111561140857600080fd5b611414848285016113a4565b600083015250602082015167ffffffffffffffff81111561143457600080fd5b611440848285016113a4565b602083015250604082015167ffffffffffffffff81111561146057600080fd5b61146c848285016113a4565b604083015250606082015167ffffffffffffffff81111561148c57600080fd5b611498848285016113a4565b606083015250608082015167ffffffffffffffff8111156114b857600080fd5b6114c4848285016113a4565b60808301525060a06114d884828501611365565b60a08301525060c06114ec84828501611365565b60c08301525060e061150084828501611350565b60e08301525092915050565b60008135905061151b81611d17565b92915050565b60006020828403121561153357600080fd5b60006115418482850161133b565b91505092915050565b60006020828403121561155c57600080fd5b600061156a84828501611365565b91505092915050565b6000806040838503121561158657600080fd5b600083013567ffffffffffffffff8111156115a057600080fd5b6115ac8582860161137a565b92505060206115bd8582860161150c565b9150509250929050565b6000806000606084860312156115dc57600080fd5b600084013567ffffffffffffffff8111156115f657600080fd5b6116028682870161137a565b93505060206116138682870161150c565b92505060406116248682870161150c565b9150509250925092565b60006020828403121561164057600080fd5b600082015167ffffffffffffffff81111561165a57600080fd5b611666848285016113ce565b91505092915050565b60006020828403121561168157600080fd5b600061168f8482850161150c565b91505092915050565b60006116a4838361181a565b905092915050565b6116b581611ae3565b82525050565b60006116c682611a48565b6116d08185611a6b565b9350836020820285016116e285611a38565b8060005b8581101561171e57848403895281516116ff8582611698565b945061170a83611a5e565b925060208a019950506001810190506116e6565b50829750879550505050505092915050565b61173981611af5565b82525050565b600061174a82611a53565b6117548185611a7c565b9350611764818560208601611b3a565b61176d81611c5d565b840191505092915050565b600061178382611a53565b61178d8185611a9e565b935061179d818560208601611b3a565b6117a681611c5d565b840191505092915050565b60006117be601083611a8d565b91506117c982611c6e565b602082019050919050565b60006117e1600683611a9e565b91506117ec82611c97565b602082019050919050565b6000611804601483611a8d565b915061180f82611cc0565b602082019050919050565b60006060830160008301518482036000860152611837828261173f565b915050602083015161184c60208601826118ba565b50604083015161185f60408601826118ba565b508091505092915050565b60006060830160008301518482036000860152611887828261173f565b915050602083015161189c60208601826118ba565b5060408301516118af60408601826118ba565b508091505092915050565b6118c381611b21565b82525050565b6118d281611b21565b82525050565b60006020820190506118ed60008301846116ac565b92915050565b6000602082019050818103600083015261190d81846116bb565b905092915050565b600060208201905061192a6000830184611730565b92915050565b6000604082019050818103600083015261194a8184611778565b9050818103602083015261195d816117d4565b905092915050565b6000602082019050818103600083015261197e816117b1565b9050919050565b6000602082019050818103600083015261199e816117f7565b9050919050565b600060208201905081810360008301526119bf818461186a565b905092915050565b60006020820190506119dc60008301846118c9565b92915050565b60006119ec6119fd565b90506119f88282611b9f565b919050565b6000604051905090565b600067ffffffffffffffff821115611a2257611a21611c2e565b5b611a2b82611c5d565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611aba82611b21565b9150611ac583611b21565b925082821015611ad857611ad7611bd0565b5b828203905092915050565b6000611aee82611b01565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611b58578082015181840152602081019050611b3d565b83811115611b67576000848401525b50505050565b60006002820490506001821680611b8557607f821691505b60208210811415611b9957611b98611bff565b5b50919050565b611ba882611c5d565b810181811067ffffffffffffffff82111715611bc757611bc6611c2e565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f41636365737320466f7262696464656e00000000000000000000000000000000600082015250565b7f54656e616e740000000000000000000000000000000000000000000000000000600082015250565b7f556e617574686f7269736564204163636573732e000000000000000000000000600082015250565b611cf281611ae3565b8114611cfd57600080fd5b50565b611d0981611af5565b8114611d1457600080fd5b50565b611d2081611b21565b8114611d2b57600080fd5b5056fea26469706673582212208a9f66438232c77166da4bd49465198c08600eeb696bfef1a008ba632c28c5a364736f6c63430008040033";

type ServicesConstructorParams =
  | [linkLibraryAddresses: ServicesLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ServicesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Services__factory extends ContractFactory {
  constructor(...args: ServicesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Services__factory.linkBytecode(linkLibraryAddresses), signer);
    }
    this.contractName = "Services";
  }

  static linkBytecode(linkLibraryAddresses: ServicesLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1c41232b8c3f9382c4bdca1a05a1ab00e7\\$__", "g"),
      linkLibraryAddresses["contracts/Utils.sol:Utils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    acctAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Services> {
    return super.deploy(acctAddr, overrides || {}) as Promise<Services>;
  }
  getDeployTransaction(
    acctAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(acctAddr, overrides || {});
  }
  attach(address: string): Services {
    return super.attach(address) as Services;
  }
  connect(signer: Signer): Services__factory {
    return super.connect(signer) as Services__factory;
  }
  static readonly contractName: "Services";
  public readonly contractName: "Services";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ServicesInterface {
    return new utils.Interface(_abi) as ServicesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Services {
    return new Contract(address, _abi, signerOrProvider) as Services;
  }
}

export interface ServicesLibraryAddresses {
  ["contracts/Utils.sol:Utils"]: string;
}
