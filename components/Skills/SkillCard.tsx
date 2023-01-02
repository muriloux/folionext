import Image from "next/image";
import Link from "next/link";

interface IProps {
  name: string;
  description?: string;
  imgSrc: string;
  url?: string;
  blackLogo?: boolean;
}

export function SkillCard({
  name,
  description,
  imgSrc,
  url,
  blackLogo,
}: IProps) {
  return (
    <div className="hover:translate-y-[2px] transition">
      <Link href={url ? url : "#skills"} target="_blank">
        <div className="group flex flex-col min-w-fit py-5 px-5 items-center justify-center">
          <h2 className="text-xs text-slate-400 py-1">{name}</h2>
          {description && (
            <p className="text-sm text-center text-slate-400">{description}</p>
          )}
          <div className="flex picture w-20 h-20  justify-center items-center">
            <Image
              className={
                blackLogo
                  ? "logo filter-none dark:filter invert saturate-0"
                  : "logo"
              }
              alt={name}
              src={imgSrc}
              width={100}
              height={100}
            ></Image>
          </div>
        </div>
      </Link>
    </div>
  );
}
