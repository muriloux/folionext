import Image from "next/image";
import { ReactElement } from "react";

interface IProps {
  imgSrc: string;
  name: string;
  children: ReactElement | ReactElement[];
}

export function PersonCard({ imgSrc, name, children }: IProps) {
  return (
    <div className="container min-w-fit py-16 flex flex-col items-center justify-center content-center m:flex-row hover:translate-y-[1.5px] transition hover:cursor-pointer dark:border-b-gray-700 border-solid border-b-slate-300 border-b h-fit max-w-full">
      <div className="picture flex  min-w-[4rem] min-h-[4em] w-20 md:w-24  relative mb-4 items-center">
        <Image
          className="rounded-full w-20 sm:w-auto"
          alt={name}
          src={imgSrc}
          height={400}
          width={400}
        />
      </div>
      <div className="signature flex flex-col w-full relative border-solid items-center content-center justify-center">
        <h1 className="flex text-base min-w-max font-bold text-slate-900 dark:text-gray-200 justify-center">
          <p>{name}</p>
        </h1>
        <h2 className="flex flex-col md:flex-row text-sm font-medium text-slate-500 justify-center items-center">
          {children}
        </h2>
      </div>
    </div>
  );
}
