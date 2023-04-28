import { FunctionComponent } from "react";
import { PersonCard } from "../PersonCard";
import { FooterItems } from "./FooterItems";
import { FooterLink } from "./FooterItems/FooterLink";

interface IProps {}

export const Footer: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <footer className="container flex flex-row mt-48 justify-evenly border-solid border-t-slate-300 dark:border-t-gray-700 border-t">
      <div id="footer-about" className="flex flex-col">
        <PersonCard
          name="Murilo Melo"
          personalUrl="https://github.com/muriloux"
          footerVersion
        >
          <span>Typescript & Javascript Developer</span>
        </PersonCard>
      </div>
      <div id="footer-links" className="flex flex-col">
        <FooterItems />
      </div>
    </footer>
  );
};
