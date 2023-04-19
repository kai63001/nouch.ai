import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: "600",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={kanit.className}>
      <Component {...pageProps} />
    </main>
  );
}
