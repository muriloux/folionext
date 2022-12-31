import Head from "next/head";
import styles from "../styles/Home.module.css";
import { SEO } from "../components/SEO";
import { PersonCard } from "../components/PersonCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-64 py-32 pt-3">
        <Navbar />
        <section className="container min-w-full" id="about">
          <PersonCard
            name="Murilo Melo"
            description="Typescript / Javascript Developer"
            imgSrc="/avatar.png"
          />
        </section>
      </main>
    </>
  );
}
