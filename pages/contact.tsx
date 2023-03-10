import { PersonCard } from "../components/PersonCard";
import { SEO } from "../components/SEO";
import ContactList from "../components/ContactList";

export default function Home() {
  return (
    <>
      <SEO
        title="Contact"
        description="Murilo Melo's Developer Portfolio"
        image="/avatar.webp"
      />

      <section className="container min-w-full" id="about">
        <PersonCard
          name="Murilo Melo"
          imgSrc="/avatar.webp"
          personalUrl="https://github.com/muriloux"
        >
          <span>&nbsp;Typescript&nbsp;&&nbsp;Javascript</span>
          <span>&nbsp;Developer&nbsp;</span>
        </PersonCard>
      </section>
      <section className="container min-w-full" id="contactlist">
        <ContactList />
      </section>
    </>
  );
}
