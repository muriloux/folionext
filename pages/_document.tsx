import { Html, Head, Main, NextScript } from "next/document";
import { Navbar } from "../components/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
