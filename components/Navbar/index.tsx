import { NavItem } from "./NavItem";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-col sm:flex-row items-center justify-between">
        <div className="">
          <NavItem name="Home" href="/"></NavItem>
          <NavItem name="Skills" href="/#skills"></NavItem>
          <NavItem name="Projects" href="/#projects"></NavItem>
        </div>
        <button className="h-8 w-8 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:scale-[1.02] hover:bg-gray-300 ring-gray-300 transition-all">
          😀
        </button>
      </nav>
    </>
  );
}
