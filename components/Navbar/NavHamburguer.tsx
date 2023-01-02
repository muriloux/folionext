import Image from "next/image";

export function NavHamburguer() {
  return (
    <button
      className="w-8 h-8 min-w-[2rem] visible filter-none md:hidden dark:filter invert"
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
}
