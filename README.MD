# OnchainRiddle Project

This repository is composed of two projects:

- A Hardhat project containing the OnchainRiddle.sol smart contract
- A Next.js project that serves as a front end for interacting with the contract

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