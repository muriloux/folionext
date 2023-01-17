import Link from "next/link";
import { FunctionComponent } from "react";

interface IProps {
  name: string;
  href: string;
}

export const FooterLink: FunctionComponent<IProps> = ({
  href,
  name,
}: IProps) => {
  return (
    <Link className="mt-2 md:mt-1 first:mt-0" href={href}>
      {name}
    </Link>
  );
};
