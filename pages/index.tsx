import Head from "next/head";
import { SEO } from "../components/SEO";
import { PersonCard } from "../components/PersonCard";
import Navbar from "../components/Navbar";
import { Intro } from "../components/Intro";
import { SkillCard } from "../components/SkillCard";

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
        <section id="skills">
          <div className="container flex flew-col sm:flex-row">
            <SkillCard
              name="Typescript"
              description="Pariatur proident ad mollit anim magna laboris aliquip irure. Qui magna minim tempor magna qui velit esse aliquip sit. Proident magna cupidatat id aute magna amet est mollit eu."
            />
            <SkillCard
              name="ReactJS"
              description="Laboris deserunt qui nulla eu est elit sunt irure. Occaecat eiusmod duis sunt sit eiusmod Lorem culpa quis deserunt. Minim sit proident veniam quis ex irure consectetur deserunt sunt elit anim. Anim officia fugiat irure anim quis pariatur. Sunt minim deserunt eu veniam anim do aliquip qui enim mollit ullamco eu. Dolore ut laboris deserunt voluptate labore incididunt sit quis cillum occaecat in."
            />
          </div>
        </section>
      </main>
    </>
  );
}
