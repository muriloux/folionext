import { FunctionComponent, ReactNode, Dispatch, SetStateAction } from "react";
import { NavItem } from "./NavItem";

interface IProps {
  open: ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavItems: FunctionComponent<IProps> = ({ open, setOpen }) => {
  return (
    <div
      id="NavItems"
      className={`${
        open ? "translate-x-full" : "-translate-x-full"
      } flex flex-col right-full md:right-0 md:translate-x-0 md:left-auto z-10 bg-[var(--background)] min-w-full absolute dark:bg-zinc-900 md:inline-block md:visible md:opacity-100 md:relative md:flex-row transition-all duration-500`}
    >
      <NavItem name="Home" href="/" />
      <NavItem name="Skills" href="/#skills" />
      <NavItem name="Projects" href="/#projects" />
      <NavItem name="Contact" href="/contact" />
    </div>
  );
};
