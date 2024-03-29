import { useEffect, useState } from "react";
import { SkillCard } from "./SkillCard";
import { HiOutlineCog8Tooth } from "react-icons/hi2";

export default function Skills() {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="py-5">
      <h1 className="flex text-xl font-bold pt-14 pb-8 text-slate-900 sm:text-xl dark:text-gray-200 justify-center">
        <p className="flex justify-center items-center">
          <HiOutlineCog8Tooth
            className={isSpinning ? "animate-spin" : "hover:animate-spin"}
          />
          &nbsp;Skills&nbsp;
        </p>
      </h1>
      <div className="container flex flex-wrap justify-center flex-row">
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
          name="Angular"
          imgSrc="/logos/Angular.svg"
          url="https://angular.io/"
        />
        <SkillCard
          name="ReactJS"
          imgSrc="/logos/React.svg"
          url="https://reactjs.org/"
        />
        <SkillCard
          name="NextJS"
          imgSrc="/logos/Next.svg"
          url="https://nextjs.org/"
          blackLogo
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
          name="Express"
          imgSrc="/logos/Express.svg"
          url="https://expressjs.com/"
          blackLogo
        />
        <SkillCard
          name="Prisma"
          imgSrc="/logos/Prisma.svg"
          url="https://www.prisma.io/"
          blackLogo
        />
        <SkillCard
          name="TypeORM"
          imgSrc="/logos/TypeORM.svg"
          url="https://typeorm.io/"
        />
        <SkillCard
          name="Mongoose"
          imgSrc="/logos/Mongoose.svg"
          url="https://mongoosejs.com/"
        />
        <SkillCard
          name="MongoDB"
          imgSrc="/logos/Mongo.svg"
          url="https://www.mongodb.com/"
        />
        <SkillCard
          name="SQLite"
          imgSrc="/logos/SQLite.svg"
          url="https://www.sqlite.org/"
        />
        <SkillCard
          name="MySQL"
          imgSrc="/logos/MySQL.svg"
          url="https://www.mysql.com/"
        />
        <SkillCard
          name="PostgreSQL"
          imgSrc="/logos/PostgreSQL.svg"
          url="https://www.postgresql.org/"
        />
      </div>
    </div>
  );
}
