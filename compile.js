// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

// the second argument below is used to specify the number of contracts
module.exports = solc.compile(source, 1).contracts[":Lottery"];
