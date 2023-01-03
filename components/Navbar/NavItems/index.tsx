import {
  FunctionComponent,
  ReactNode,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
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
      } flex flex-col  fixed z-10 bg-[var(--background)] dark:bg-zinc-900 md:inline-block md:visible md:opacity-100 md:relative md:flex-row transition-all`}
    >
      <NavItem name="Home" href="/" />
      <NavItem name="Skills" href="/#skills" />
      <NavItem name="Projects" href="/#projects" />
    </div>
  );
};
