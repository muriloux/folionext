interface IProps {
  text: string;
}

export function NavButton({ text }: IProps) {
  return (
    <button className="h-8 w-8 min-w-[2rem] m-1 bg-gray-200 rounded-lg dark:bg-gray-700 flex items-center justify-center hover:scale-[1.02] hover:bg-gray-300 ring-gray-300 transition-all">
      {text}
    </button>
  );
}
