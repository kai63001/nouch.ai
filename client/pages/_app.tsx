import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <main className={quicksand.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
