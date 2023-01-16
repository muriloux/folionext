import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface IProps {
  name: string;
  href: string;
}

export const NavItem: FunctionComponent<IProps> = ({ name, href }: IProps) => {
  const { asPath } = useRouter();
  const isActiveClass = asPath == href ? "font-bold" : "font-medium";

  return (
    <>
      <Link
        className={`${isActiveClass} text-gray-800 dark:text-gray-200 dark:border-l-gray-700 px-6 py-4 last:border-b-0 md:inline-block sm:px-12 md:px-3 md:py-2 border-b md:border-b-0 md:border-l md:hover:translate-x-[-2px] transition-all`}
        href={href}
      >
        <span>{name}</span>
      </Link>
    </>
  );
};
