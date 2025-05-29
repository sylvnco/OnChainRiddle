import { defineConfig } from '@wagmi/cli'
import { hardhat, react } from '@wagmi/cli/plugins'

export default defineConfig({
    out: 'src/generated.ts',
    plugins: [hardhat({
        project: '../zama-contract/',
        deployments: {
            OnchainRiddle: {
                31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3', // Hardhat deterministic first contract address
                11155111: '0x06BC0F3cF252735E8C0AcD7A94577417790A50Fe' // Sepolia deployment address
            }
        }
    }), react()]
});