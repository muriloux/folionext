import Image from "next/image";
import { NavButton } from "./NavButton";
import { NavItem } from "./NavItem";
import { NavHamburguer } from "./NavHamburguer";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between">
        <NavItem name="Home" href="/"></NavItem>
        <NavItem name="Skills" href="/#skills"></NavItem>
        <NavItem name="Projects" href="/#projects"></NavItem>

        <div className="container md:w-auto md:float-right flex flex-row ml-auto float-right justify-between">
          <NavHamburguer />
          <NavButton>
            <Image alt="Portuguese" src="/Pt.svg" width={100} height={100} />
          </NavButton>
        </div>
      </nav>
    </>
  );
}
