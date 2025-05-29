import { useConnect } from "wagmi";
import { injected } from "wagmi";

const RiddleFormUnlogged = () => {
  const { connect } = useConnect();

  return (
    <div data-testid="riddle-form-unlogged" className='flex flex-col h-full items-center justify-center gap-8'>
      <h1 className='text-center text-5xl font-bold max-w-5xl leading-tight'>
        Please connect your wallet to play the riddle game
      </h1>
      <div className='flex items-center gap-4'>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors" onClick={() => connect({ connector: injected() })}>Connect</button>
      </div>
    </div>
  )
}
export default RiddleFormUnlogged;