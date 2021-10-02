// deploy code will go here
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
const dotenv = require("dotenv").config();

// first param in the below line of code is the account mneomonic and second is url for infura api
const provider = new HDWalletProvider(
  process.env.METAMASK_SECRET_RECOVERY_PHRASE,
  "https://rinkeby.infura.io/v3/2cb14885598949dbbef244e262872ba6"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", gasPrice: "5000000000", from: accounts[0] });

  console.log("Contract deployed at", result.options.address);
};

deploy();

// .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
// 0x243Cc7eEC35E8827323782aB110fFe5F7f5aec20
