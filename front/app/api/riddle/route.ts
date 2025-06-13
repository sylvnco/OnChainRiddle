import { createWalletClient, http, keccak256, type Hex, publicActions, toBytes, zeroAddress } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { onchainRiddleAbi, onchainRiddleAddress } from "../../../src/generated";
import { hardhat, sepolia } from "viem/chains";

export async function GET() {
    try {
        if(!process.env.NETWORK && !process.env.PRIVATE_KEY && !process.env.ALCHEMY_RPC_URL) {
            throw new Error("Missing environment variables !");
        }
        const network = process.env.NETWORK as string;
        const botPrivateKey = process.env.PRIVATE_KEY as Hex;
        const chainId = network === "sepolia" ? sepolia.id : hardhat.id

        const riddles = [
            {
                "riddle": "What has roots as nobody sees, Is taller than trees, Up, up it goes, And yet never grows?",
                "answer": "mountain"
            },
            {
                "riddle": "Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.",
                "answer": "wind"
            },
            {
                "riddle": "It cannot be seen, cannot be felt, Cannot be heard, cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes out first and follows after, Ends life, kills laughter.",
                "answer": "dark"
            },
            {
                "riddle": "Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking.",
                "answer": "fish"
            },
            {
                "riddle": "This thing all things devours; Birds, beasts, trees, flowers; Gnaws iron, bites steel; Grinds hard stones to meal; Slays king, ruins town, And beats mountain down.",
                "answer": "time"
            }
        ];

        const account = privateKeyToAccount(botPrivateKey);

        const client = createWalletClient({
            chain: network === "sepolia" ? sepolia : hardhat,
            transport: network === "sepolia" ? http(process.env.ALCHEMY_RPC_URL) : http(),
            account
        }).extend(publicActions);

        const winnerAddress = await client.readContract({
            abi: onchainRiddleAbi,
            functionName: "winner",
            address: onchainRiddleAddress[chainId]
        });

        if (winnerAddress === zeroAddress) {
            return Response.json({
                message: "There is still an active riddle",
            }, { status: 200 });
        }

        const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];

        const { request } = await client.simulateContract({
            abi: onchainRiddleAbi,
            functionName: 'setRiddle',
            args: [randomRiddle.riddle, keccak256(toBytes(randomRiddle.answer))],
            address: onchainRiddleAddress[chainId]
        });

        const res = await client.writeContract(request);

        return Response.json({
            message: "Riddle set successfully",
            transactionHash: res,
            riddle: randomRiddle.riddle
        }, { status: 200 });
    } catch (error) {
        let message = 'Something went wrong';
        if (error instanceof Error) message = error.message
        return Response.json({
            error: 'Failed to set a new riddle',
            details: message
        }, { status: 500 });
    }
}