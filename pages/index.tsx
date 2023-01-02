import Head from "next/head";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import { PersonCard } from "../components/PersonCard";
import { SEO } from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-8 sm:px-36 md:px-60 py-32 pt-3">
        <Navbar />
        <section className="container min-w-full" id="about">
          <PersonCard
            name="Murilo Melo"
            imgSrc="/avatar.png"
            personalUrl="https://github.com/muriloux"
          >
            <span>&nbsp;Typescript&nbsp;</span>
            <span>&nbsp;&&nbsp;</span>
            <span>&nbsp;Javascript&nbsp;</span>
            <span>&nbsp;Developer&nbsp;</span>
          </PersonCard>
        </section>
        <section id="intro">
          <Intro />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </main>
    </>
  );
}
