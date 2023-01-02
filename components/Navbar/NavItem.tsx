import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  name: string;
  href: string;
}

export function NavItem({ name, href }: IProps) {
  const { asPath } = useRouter();
  const isActiveClass = asPath === href ? "font-bold" : "font-medium";

  return (
    <>
      <Link
        className={`${isActiveClass} text-gray-800 dark:text-gray-200 dark:border-l-gray-700 hidden md:inline-block p-1 sm:px-3 sm:py-2 hover:translate-x-[-1px] transition-all border-l`}
        href={href}
      >
        <span>{name}</span>
      </Link>
    </>
  );
}
