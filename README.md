# Hello, World Ethereum Smart Contract

This repository contains a simple Ethereum smart contract that emulates the classic "Hello, World!" program as an entry point into the world of blockchain development.

## What it does

The smart contract stored in this repository is designed to introduce the basic functionalities of Ethereum smart contracts. It allows users to interact with it by retrieving a stored message and updating it with a new one.

## How I built it

The smart contract is written in Solidity and was developed using the Hardhat development environment. Deployment and interaction with the contract were managed through Alchemy on the Goerli test network.

## Challenges I ran into

The main challenges included grasping the asynchronous nature of blockchain, managing gas fees, and ensuring the smart contract code was secure and efficient.

## Accomplishments that I'm proud of

The successful deployment of the smart contract to the Goerli test network and the execution of functions on the Ethereum blockchain are the primary achievements of this project.

## What I learned

This project has been an enlightening introduction to Solidity, smart contract deployment, and the general mechanics of the Ethereum blockchain.

## What's next for Hello, World Ethereum Smart Contract

The next steps involve enhancing the project with additional smart contract features, creating a user-friendly front end, and possibly integrating it with other smart contracts or blockchain-based services.

## Getting Started

To get a local copy up and running follow these simple steps.

## Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  
- Install Hardhat
  ```sh
  npm install --save-dev hardhat

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/brandonsutan/hello-world_Ethereum-Smart-Contract.git
2. Install NPM packages
   ```sh
   npm install
3.Enter your API in .env


  API_KEY='ENTER YOUR API';
  
  PRIVATE_KEY='YOUR PRIVATE KEY';
  
  CONTRACT_ADDRESS='DEPLOYED CONTRACT ADDRESS';

## Usage
To run the smart contract locally and interact with it:

1. Compile the smart contract:
   ```sh
   npx hardhat compile
   
2. Deploy to the local test network:
   ```sh
   npx hardhat run scripts/deploy.js --network localhost
   
3. Interact with the deployed contract:
   ```sh
   node scripts/interact.js

## License

Distributed under the ISC License. See LICENSE for more information.
