import { ReactElement } from "react";

interface IProps {
  children: ReactElement;
}

export function NavButton({ children }: IProps) {
  return (
    <button className="flex h-8 w-8 min-w-[2rem] m-1 transition-all bg-gray-200 rounded-lg dark:bg-gray-700 items-center justify-center hover:scale-[1.02] hover:bg-gray-300 ring-gray-300">
      <div className="flex h-6 w-6 items-center justify-center">{children}</div>
    </button>
  );
}
