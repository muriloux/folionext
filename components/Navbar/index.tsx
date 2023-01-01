import { NavButton } from "./NavButton";
import { NavItem } from "./NavItem";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-col sm:flex-row items-center justify-between">
        <div className="container">
          <button
            className="mobile-menu_burger__wvd0z visible md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            <svg
              className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              data-hide="false"
            >
              <path
                d="M2.5 7.5H17.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2.5 12.5H17.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
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
