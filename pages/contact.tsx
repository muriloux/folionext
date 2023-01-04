import Head from "next/head";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import { PersonCard } from "../components/PersonCard";
import { SEO } from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Contacts"
        description="Murilo Melo's Developer Portfolio"
        image="https://murilomelo.vercel.app/public/avatar.png"
      />

      <section className="container min-w-full" id="about">
        <PersonCard
          name="Murilo Melo"
          imgSrc="/avatar.png"
          personalUrl="https://github.com/muriloux"
        >
          <span>&nbsp;Typescript&nbsp;&&nbsp;Javascript</span>
          <span>&nbsp;Developer&nbsp;</span>
        </PersonCard>
      </section>
    </>
  );
}
