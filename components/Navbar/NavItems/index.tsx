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
        open ? "visible opacity-100" : "invisible opacity-0"
      } flex flex-col z-10 bg-[var(--background)] left-0 min-w-full absolute dark:bg-zinc-900 md:inline-block md:visible md:opacity-100 md:relative md:flex-row transition-all`}
    >
      <NavItem name="Home" href="/" />
      <NavItem name="Skills" href="/#skills" />
      <NavItem name="Projects" href="/#projects" />
      <NavItem name="Contact" href="/contact" />
    </div>
  );
};
