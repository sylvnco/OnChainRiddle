import type { Metadata } from "next";
import Providers from "@/components/providers";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zama's riddle website",
  description: "Guess our riddle !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Providers>
        <div><Toaster/></div>
          <Header />
        {children}
        </Providers>
      </body>
    </html>
  );
}
