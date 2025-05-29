import { http, createConfig, injected } from 'wagmi'
import { sepolia, hardhat } from 'wagmi/chains'

export type chainIds = 11155111 | 31337;

export const config = createConfig({
  chains: [sepolia, hardhat],
  connectors: [injected()],
  ssr: true,
  transports: {
    [sepolia.id]: http(),
    [hardhat.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}