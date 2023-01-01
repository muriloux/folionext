import Image from "next/image";
import { ReactElement } from "react";

interface IProps {
  imgSrc: string;
  name: string;
  children: ReactElement | ReactElement[];
}

export function PersonCard({ imgSrc, name, children }: IProps) {
  return (
    <div className="container min-w-fit py-5 flex flex-col items-center justify-center content-center sm:flex-row hover:translate-y-[1.5px] transition hover:cursor-pointer dark:border-b-gray-700 border-solid border-b h-fit max-w-full">
      <div className="picture flex  min-w-fit sm:min-w-[4rem] sm:w-24 h-[6em] relative sm:mb-0 sm:mr-5 items-center">
        <Image
          className="rounded-full w-14 sm:w-auto"
          alt={name}
          src={imgSrc}
          height={400}
          width={400}
        />
      </div>
      <div className="flex flex-col signature h-[6em] w-full relative border-solid items-center content-center justify-center">
        <h1 className="flex text-base min-w-max font-bold text-slate-900 dark:text-gray-200 justify-center">
          <p>{name}</p>
        </h1>
        <h2 className="flex flex-col sm:flex-row text-sm font-medium text-slate-500 justify-center items-center">
          {children}
        </h2>
      </div>
    </div>
  );
}
