// Run: node interact.js

const API_KEY = process.env.API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

// Generates an ABI and saves it to json file
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json")

// Print ABI to console
console.log(JSON.stringify(contract.abi))