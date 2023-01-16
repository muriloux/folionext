import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface IProps {
  imgSrc: string;
  personalUrl: string;
  name: string;
  children: ReactElement | ReactElement[];
}

export function PersonCard({ imgSrc, personalUrl, name, children }: IProps) {
  return (
    <div className="container min-w-fit py-10 flex flex-col items-center justify-center content-center m:flex-row hover:translate-y-[2px] transition dark:border-b-gray-700 border-solid border-b-slate-300 border-b h-fit max-w-full">
      <div className="picture flex  min-w-[4rem] min-h-[4em] w-20 md:w-24  relative mb-4 items-center">
        <Link href={personalUrl} target="_blank">
          <Image
            className="hover:scale-[1.02] transition-all rounded-full w-20 sm:w-auto hover:cursor-pointer"
            alt={name}
            src={imgSrc}
            height={500}
            width={500}
            priority
          />
        </Link>
      </div>
      <div className="signature flex flex-col w-full relative border-solid items-center content-center justify-center">
        <Link href={personalUrl} target="_blank">
          <h1 className="flex text-base min-w-max font-bold text-slate-900 hover:cursor-pointer dark:text-gray-200 justify-center">
            <p>{name}</p>
          </h1>
        </Link>
        <h2 className="flex flex-col sm:flex-row text-xs dark:font-semibold text-gray-500 justify-center items-center">
          {children}
        </h2>
      </div>
    </div>
  );
}
