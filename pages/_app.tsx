import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      style={
        pageProps.is404
          ? { backgroundColor: "white" }
          : { backgroundColor: "var(--background)" }
      }
      className={"px-6 sm:px-12 md:px-52 py-32 pt-3"}
    >
      {pageProps.is404 ? <></> : <Navbar />}
      <Component {...pageProps} />
    </main>
  );
}
