import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="px-6 sm:px-36 md:px-52 py-32 pt-3">
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
