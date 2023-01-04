import { ReactElement } from "react";

interface IProps {
  children: (string | ReactElement)[];
}

export function ContactListItem({ children }: IProps) {
  return <li className="flex flex-row items-center min-w-max">{children}</li>;
}
