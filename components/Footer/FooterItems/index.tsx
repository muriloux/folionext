import { FunctionComponent } from "react";
import { FooterLink } from "./FooterLink";

interface IProps {}

export const FooterItems: FunctionComponent<IProps> = ({}: IProps) => {
  return (
    <div className="container text-sm text-gray-500  h-fit max-w-full py-10 flex flex-col items-center justify-center content-center">
      <FooterLink href="/contact" name="Contact" />
      <FooterLink href="/#projects" name="Projects" />
      <FooterLink href="/#skills" name="Skills" />
    </div>
  );
};
