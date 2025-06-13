"use client";
import { WagmiProvider } from 'wagmi'
import { config } from '@/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()


const Providers = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <><WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </WagmiProvider></>
}

export default Providers;