import { ReactElement } from "react";
import Image from "next/image";

interface IProps {
  name: string;
  description: string;
  imgSrc?: string;
}

export function SkillCard({ name, description, imgSrc }: IProps) {
  return (
    <div className="container w-auto h-10 p-2">
      {imgSrc && <Image alt={name} src={imgSrc}></Image>}
      <h2>{name}</h2>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
}
