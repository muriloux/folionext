import Head from "next/head";
import { SEO } from "../components/SEO";
import { PersonCard } from "../components/PersonCard";
import Navbar from "../components/Navbar";
import { Intro } from "../components/Intro";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-8 sm:px-64 py-32 pt-3 ">
        <Navbar />
        <section className="container min-w-full" id="about">
          <PersonCard name="Murilo Melo" imgSrc="/avatar.png">
            <span>&nbsp;Typescript&nbsp;</span>
            <span>&nbsp;&&nbsp;</span>
            <span>&nbsp;Javascript&nbsp;</span>
            <span>&nbsp;Developer&nbsp;</span>
          </PersonCard>
        </section>
        <section id="intro">
          <Intro />
        </section>
        <section id="skills"></section>
      </main>
    </>
  );
}
