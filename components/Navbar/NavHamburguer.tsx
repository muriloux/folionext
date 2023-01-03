import Image from "next/image";
import {
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  useEffect,
} from "react";

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
      className="w-8 h-8 min-w-[2rem] md:absolute md:float-left visible filter-none md:hidden dark:filter invert"
      aria-label="Toggle menu"
      type="button"
    >
      <Image
        className="w-8 h-8"
        src="menu.svg"
        alt="menu"
        width={24}
        height={24}
      />
    </button>
  );
};
