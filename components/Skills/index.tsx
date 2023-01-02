import { SkillCard } from "./SkillCard";

export default function Skills() {
  return (
    <div className="py-5">
      <h1 className="flex text-base font-bold text-slate-900 dark:text-gray-200 justify-center">
        <p>Skills</p>
      </h1>
      <div className="container flex flex-wrap justify-center flex-row">
        <SkillCard
          name="NodeJS"
          imgSrc="/logos/Node.svg"
          url="https://nodejs.org/"
        />
        <SkillCard
          name="Javascript"
          imgSrc="/logos/JS.svg"
          url="https://www.javascript.com/"
        />
        <SkillCard
          name="Typescript"
          imgSrc="/logos/TS.svg"
          url="https://www.typescriptlang.org/"
        />
        <SkillCard
          name="ReactJS"
          imgSrc="/logos/React.svg"
          url="https://reactjs.org/"
        />
        <SkillCard
          name="NextJS"
          imgSrc="/logos/Next.png"
          url="https://nextjs.org/"
        />
        <SkillCard
          name="Sass"
          imgSrc="/logos/Sass.svg"
          url="https://sass-lang.com/"
        />
        <SkillCard
          name="Tailwind CSS"
          imgSrc="/logos/Tailwind.svg"
          url="https://tailwindcss.com/"
        />
        <SkillCard
          name="MongoDB"
          imgSrc="/logos/Mongo.svg"
          url="https://www.mongodb.com/"
        />
      </div>
    </div>
  );
}
