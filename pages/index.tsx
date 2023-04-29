import Intro from "../components/Intro";
import Skills from "../components/Skills";
import { PersonCard } from "../components/PersonCard";
import { SEO } from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Murilo Melo's Developer Portfolio"
        image="https://avatars.githubusercontent.com/u/90528537?v=4"
      />

      <section className="container min-w-full" id="about">
        <PersonCard
          name="Murilo Melo"
          imgSrc="https://avatars.githubusercontent.com/u/90528537?v=4"
          personalUrl="https://github.com/muriloux"
        >
          <span>&nbsp;Typescript&nbsp;&&nbsp;Javascript</span>
          <span>&nbsp;Developer&nbsp;</span>
        </PersonCard>
      </section>
      <section id="intro">
        <Intro />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </>
  );
}
