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
        className={`${isActiveClass} text-gray-800 dark:text-gray-200 dark:border-l-gray-700 p-4 md:inline-block md:px-3 md:py-2 border-b md:border-b-0 md:border-l hover:bg-slate-200 dark:hover:bg-neutral-800 md:hover:translate-x-[-1px] transition-all`}
        href={href}
      >
        <span>{name}</span>
      </Link>
    </>
  );
};