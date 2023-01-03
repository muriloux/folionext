import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface IProps {
  name: string;
  href: string;
}

export const NavItem: FunctionComponent<IProps> = ({ name, href }: IProps) => {
  const { asPath } = useRouter();
  const isActiveClass = asPath === href ? "font-bold" : "font-medium";

  return (
    <>
      <Link
        className={`${isActiveClass} text-gray-800 dark:text-gray-200 dark:border-l-gray-700 p-1 sm:px-3 sm:py-2 hover:bg-slate-100 md:hover:translate-x-[-1px] transition-all border-l`}
        href={href}
      >
        <span>{name}</span>
      </Link>
    </>
  );
};
