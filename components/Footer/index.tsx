import { FunctionComponent } from "react";
import { PersonCard } from "../PersonCard";
import { FooterItems } from "./FooterItems";
import { FooterLink } from "./FooterItems/FooterLink";

interface IProps {}

export const Footer: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <footer className="container justify-between mt-48 border-solid border-t-slate-300 dark:border-t-gray-700 border-t">
      <div className="flex flex-row justify-evenly">
        <div
          id="footer-about"
          className="flex flex-col items-center justify-center px-5"
        >
          <PersonCard
            name="Murilo Melo"
            personalUrl="https://github.com/muriloux"
            footerVersion
          >
            <span>Typescript & Javascript Developer</span>
          </PersonCard>
        </div>
        <div
          id="footer-links"
          className="flex flex-col items-center justify-center px-5"
        >
          <FooterItems />
        </div>
      </div>
      <br />
      <div className="flex items-center justify-center py-5 w-full">
        Powered by Next.js
      </div>
    </footer>
  );
};
