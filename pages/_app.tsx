import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${
        pageProps.is404 ? "bg-white" : "bg-[var(--background)]"
      } px-6 sm:px-12 md:px-52 py-32 pb-3 pt-3`}
    >
      {pageProps.is404 ? <></> : <Navbar />}
      <Component {...pageProps} />
      {pageProps.is404 ? <></> : <Footer />}
    </main>
  );
}
