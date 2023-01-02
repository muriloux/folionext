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
            className="rounded-full w-20 sm:w-auto hover:cursor-pointer"
            alt={name}
            src={imgSrc}
            height={400}
            width={400}
          />
        </Link>
      </div>
      <div className="signature flex flex-col w-full relative border-solid items-center content-center justify-center">
        <Link href={personalUrl} target="_blank">
          <h1 className="flex text-base min-w-max font-bold text-slate-900 hover:cursor-pointer dark:text-gray-200 justify-center">
            <p>{name}</p>
          </h1>
        </Link>
        <h2 className="flex flex-col sm:flex-row text-sm font-medium text-slate-500 justify-center items-center">
          {children}
        </h2>
      </div>
    </div>
  );
}
