import { useReadOnchainRiddle, useWriteOnchainRiddleSubmitAnswer, useReadOnchainRiddleWinner, useWatchOnchainRiddleAnswerAttemptEvent, useWatchOnchainRiddleRiddleSetEvent } from "../src/generated";
import { useState } from "react";
import toast from "react-hot-toast";
import { Address, keccak256, toBytes, zeroAddress } from "viem";
import { useWaitForTransactionReceipt } from "wagmi";

type RiddleFormType = {
    isConnected: boolean;
    address: Address
}

const RiddleForm = ({isConnected, address}: RiddleFormType) => {
    const [attempts, setAttempts] = useState<string[]>([]);

    const { isLoading: isRiddleWinnerLoading, data: riddleWinner, refetch: refetchWinner } = useReadOnchainRiddleWinner();
    const { isLoading, data: riddle, refetch: refetchRiddle } = useReadOnchainRiddle(
        {
            functionName: 'riddle',
            query: {
                enabled: isConnected,
            }
        }
    )
    const { writeContractAsync, data: hash } = useWriteOnchainRiddleSubmitAnswer();
    const { isLoading: isTransactionPending } =
        useWaitForTransactionReceipt({
            hash,
        })

    useWatchOnchainRiddleRiddleSetEvent({
        onLogs: async () => {
            await refetchRiddle()
            await refetchWinner();
        }
    });

    useWatchOnchainRiddleAnswerAttemptEvent({
        fromBlock: BigInt(0),
        args: {
            riddleHash: keccak256(toBytes(riddle!))
        },
        onLogs: async (logs) => {
            const previousAnwser = logs.map(x => x.args.anwser).filter(x => x !== null && x !== undefined);
            const uniqueAnswer = [...new Set(previousAnwser)];
            if (uniqueAnswer && uniqueAnswer.length !== attempts.length) {
                setAttempts(uniqueAnswer);
            }
            await refetchWinner();
        },
        enabled: riddle !== null && riddle !== undefined && riddleWinner === zeroAddress
    });



    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const answer = formData.get('answer') as string;

        if (attempts.includes(answer.toLowerCase())) {
            toast.error("Someone already tried this answer.");
            return;
        }

        await writeContractAsync({
            args: [answer.toLowerCase()],
        }, {
            onSuccess: async () => {
                const { data } = await refetchWinner();
                if (data === address) {
                    toast.success(`Congratulation ! You found the answer : ${answer}`)
                    setAttempts([])
                    try {
                        await fetch('/api/riddle/');
                    } catch (err) {
                        console.error('Unable to generate a new riddle:', err);
                    }
                } else {
                    toast.error(`Wrong answer !`)
                    setAttempts(a => [...a, answer])
                }
            },
            onError: async(error) => {
                console.log(error.message)
            }
        });

    }
    console.log(riddleWinner)
    console.log(isRiddleWinnerLoading)
    if (!isRiddleWinnerLoading && riddleWinner !== zeroAddress) {
        return (
            <div className='flex flex-col h-full items-center justify-center gap-8'>
                <p>Riddle already solved by {riddleWinner == address ? "you" : address} !</p>
                <p>Let&apos;s wait for another riddle...</p>
            </div>
        )
    }

    return (
        <div className='flex flex-col h-full items-center md:justify-center gap-24 md:gap-8 pt-24 md:pt-0'>
            {isLoading ? <h1 className="text-center text-5xl font-bold max-w-5xl leading-tight">Loading...</h1> : <h1 className='text-center text-lg md:text-5xl font-bold max-w-5xl leading-tight'>
                {riddle}
            </h1>}

            {!isTransactionPending ? (<form data-testid="riddle-form" onSubmit={submit} className='flex flex-col md:flex-row items-center gap-4'>
                <input
                    required
                    name="answer"
                    type='text'
                    placeholder='Your answer...'
                    className='bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 w-64'
                />

                <button
                    type='submit'
                    className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors'
                >
                    Submit
                </button>
            </form>) : (<div>Waiting for transaction to complete...</div>)}

            {<p className='text-slate-400 text-lg'>
                Previously submitted answers: {attempts.join(', ')}
            </p>}

        </div>
    )
}

export default RiddleForm;