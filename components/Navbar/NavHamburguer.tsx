import {
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  useEffect,
} from "react";
import { FiMenu } from "react-icons/fi";

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
    window.addEventListener("click", (event) => {
      if (!EvTarget?.contains(event.target)) {
        setOpen(false);
      }
    });
  });

  return (
    <button
      id="Hamburguer"
      onClick={handleClick}
      className="flex w-8 h-8 min-w-[2rem] md:absolute md:float-left visible justify-center items-center filter-none md:hidden hover:bg-slate-200 dark:hover:bg-zinc-800"
      aria-label="Toggle menu"
      type="button"
    >
      <FiMenu size={25} />
    </button>
  );
};
