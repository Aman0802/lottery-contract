// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

// the second argument below is used to specify the number of contracts
module.exports = solc.compile(source, 1).contracts[":Inbox"];
