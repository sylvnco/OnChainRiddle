"use client";
import RiddleForm from "@/components/riddle-form";
import RiddleFormUnlogged from "@/components/riddle-form-unlogged";
import { useAccount } from "wagmi";

export default function Home() {
  const {isConnected, address} = useAccount();
  return (
    <div className='w-screen h-screen bg-slate-900 text-white'>
        {!isConnected ? (<RiddleFormUnlogged/>) : (<RiddleForm  isConnected={isConnected} address={address!} />)}
    </div>
  );
}
