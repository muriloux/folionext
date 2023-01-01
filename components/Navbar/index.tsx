import { NavButton } from "./NavButton";
import { NavItem } from "./NavItem";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-col sm:flex-row items-center justify-between">
        <div className="container">
          <NavItem name="Home" href="/"></NavItem>
          <NavItem name="Skills" href="/#skills"></NavItem>
          <NavItem name="Projects" href="/#projects"></NavItem>
        </div>
        <div className="flex flex-col sm:flex-row ml-auto float-right justify-between">
          <NavButton text="😀" />
        </div>
      </nav>
    </>
  );
}
