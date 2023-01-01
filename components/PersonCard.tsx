import styles from "./PersonCard.module.css";
import Image from "next/image";

interface IProps {
  imgSrc: string;
  name: string;
  description: string;
}

export function PersonCard({ imgSrc, name, description }: IProps) {
  return (
    <div className="container py-3 flex flex-col items-center sm:flex-row hover:translate-y-[1.5px] transition hover:cursor-pointer dark:border-b-gray-700 border-solid border-b h-fit max-w-full">
      <div className="picture flex w-fit sm:w-24 h-[6em] relative sm:mb-0 items-center">
        <Image
          className="rounded-full w-14 sm:w-auto "
          alt={name}
          src={imgSrc}
          height={400}
          width={400}
        />
      </div>
      <div className="flex flex-col signature h-[6em] w-full relative border-solid items-center justify-center">
        <h1 className="text-base font-bold text-slate-900 dark:text-gray-200 justify-center">
          {name}
        </h1>
        <h2 className="text-sm font-medium text-slate-500 justify-center">
          {description}
        </h2>
      </div>
    </div>
  );
}
