"use client";
import { useAccount, useConnect, useChains, useDisconnect, useSwitchChain, useBalance, injected } from "wagmi";
import { formatUnits } from "viem";
import { type chainIds } from "../config";
import { LogOutIcon } from "lucide-react";

const Header = () => {
    const { isConnected, chain, address } = useAccount();
    const { data: balance } = useBalance({ address });
    const { connect } = useConnect()
    const { disconnect } = useDisconnect()
    const { switchChain } = useSwitchChain()
    const chains = useChains();
    return (
        <nav className="bg-slate-900 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          {isConnected && (
            <div className="flex items-center gap-2">
              <select
                value={chain!.id}
                onChange={(e) =>
                  switchChain({ chainId: parseInt(e.target.value) as chainIds })
                }
                className="bg-slate-800 border border-slate-700 rounded px-3 py-1 text-sm focus:outline-none focus:border-blue-500"
              >
                {chains.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          )}
      
          {!isConnected ? (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors ml-auto"
              onClick={() => connect({ connector: injected() })}
            >
              Connect Wallet
            </button>
          ) : (
            <>
              <div className="flex items-center gap-3 md:hidden">
                <div className="bg-slate-800 px-3 py-2 rounded-lg border border-slate-700">
                  <span className="text-sm font-mono">{address?.slice(0, 6)}</span>
                </div>
      
                <div className="bg-slate-800 px-3 py-2 rounded-lg border border-slate-700">
                  <span className="text-sm font-mono">
                    {balance &&
                      formatUnits(balance.value, balance.decimals).split(".")[0]}
                  </span>
                </div>
      
                <button
                  onClick={() => disconnect()}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <LogOutIcon />
                </button>
              </div>
      
              <div className="hidden md:flex items-center gap-3">
                <div className="bg-slate-800 px-3 py-2 rounded-lg border border-slate-700">
                  <span className="text-sm font-mono">{address}</span>
                </div>
      
                <div className="bg-slate-800 px-3 py-2 rounded-lg border border-slate-700">
                  <span className="text-sm font-mono">
                    {balance && formatUnits(balance.value, balance.decimals)}
                  </span>
                </div>
      
                <button
                  onClick={() => disconnect()}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Disconnect
                </button>
              </div>
            </>
          )}
        </div>
      </nav>
    )
}

export default Header;