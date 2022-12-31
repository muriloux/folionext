import styles from "./PersonCard.module.css";
import Image from "next/image";

interface IProps {
  imgSrc: string;
  name: string;
  description: string;
}

export function PersonCard({ imgSrc, name, description }: IProps) {
  return (
    <div className="container py-3 flex flex-col sm:flex-row hover:translate-y-[1.5px] transition hover:cursor-pointer border-solid border-b h-fit max-w-full items-end">
      <div className="picture flex w-24 h-[6em] relative sm:mb-0 items-center">
        <Image
          className="rounded-full"
          alt={name}
          src={imgSrc}
          height={400}
          width={400}
        />
      </div>
      <div className="flex flex-col signature h-[6em] w-full relative border-solid items-center justify-center">
        <h1 className="text-2xl font-bold text-slate-900">{name}</h1>
        <h2 className="font-medium text-slate-500">{description}</h2>
      </div>
    </div>
  );
}
