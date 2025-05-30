import { http, createConfig, injected } from 'wagmi'
import { sepolia, hardhat } from 'wagmi/chains'

export type chainIds = 11155111 | 31337;

const ALCHEMY_URL = process.env.ALCHEMY_RPC_URL;
console.log("ALCHEMY_URL", ALCHEMY_URL)
export const config = createConfig({
  chains: [sepolia, hardhat],
  connectors: [injected()],
  ssr: true,
  transports: {
    [sepolia.id]: http(ALCHEMY_URL),
    [hardhat.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}