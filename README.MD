# OnchainRiddle Project

This repository is composed of two projects:

- A Hardhat project containing the OnchainRiddle.sol smart contract
- A Next.js project that serves as a front end for interacting with the contract

# Key Points

* Here is the contract address on Sepolia (verified): https://sepolia.etherscan.io/address/0x06BC0F3cF252735E8C0AcD7A94577417790A50Fe#readContract
* here is the front end deploy https://on-chain-riddle.vercel.app/
* I chose to generate an address to deploy it and to use it in my "script" (an API endpoint) to set a new riddle.
* I use Wagmi and Viem to generate the whole typing and hooks for the project.
* I had to modify the smart contract to prevent users from submitting an answer that has already been submitted for the riddle.
* I used hooks to listen to the events.
* It took me about 10 hours to do it (in several sessions)

## How to Install

### Hardhat Project Setup

1. Install dependencies in the Hardhat project
2. Run `npx hardhat node` to launch a local Hardhat node
3. Deploy OnchainRiddle smart contract to local blockchain using `pnpm run deploy`
4. The OnchainRiddle smart contract should be at address `0x5FbDB2315678afecb367f032d93F642f64180aa3` (deterministic address)

**Note:** If you want to deploy the smart contract to Sepolia, you need to add an Alchemy key and a private key to the Hardhat environment variables.

### Next.js Project Setup

1. Install dependencies in the Next.js project
2. Run `npx wagmi generate` to generate typing
3. Create a `.env` environment file containing:
   ```
   NETWORK=hardhat # to connect to local hardhat instance
   PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 # first account of hardhat used to deploy the SC
   ```
4. Launch the app with `pnpm run dev`