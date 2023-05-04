import {
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  useEffect,
} from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface IProps {
  open: ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavHamburguer: FunctionComponent<IProps> = ({
  open,
  setOpen,
}: IProps) => {
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const EvTarget = window.document.getElementById("Hamburguer") as
      | EventTarget
      | any;

    const listener = (event: Event) => {
      if (!EvTarget?.contains(event.target)) {
        event.stopPropagation();

        setOpen(false);
      }
    };

    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  });

  return (
    <button
      id="Hamburguer"
      onClick={handleClick}
      className="flex w-8 h-8 min-w-[2rem] md:absolute md:float-left visible justify-center items-center filter-none md:hidden hover:bg-slate-200 dark:hover:bg-zinc-800"
      aria-label="Toggle menu"
      type="button"
    >
      <FiX
        className={`absolute transition-opacity duration-150 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        size={25}
      />
      <FiMenu
        className={`absolute transition-opacity duration-150 ${
          open ? "opacity-0" : "opacity-100"
        }`}
        size={25}
      />
    </button>
  );
};
