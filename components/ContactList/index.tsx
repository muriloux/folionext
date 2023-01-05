import Link from "next/link";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { IconWhatsapp } from "../Icons/IconWhatsapp";
import { ContactListItem } from "./ContactListItem";

export default function ContactList() {
  return (
    <ul className="text-sm md:text-base py-5 px-4 md:px-16">
      <ContactListItem>
        <FiMail />
        &nbsp;E-mail:&nbsp;murilomelo.code@gmail.com
      </ContactListItem>
      <ContactListItem>
        <FiGithub />
        &nbsp;Github:&nbsp;
        <Link
          className="text-sky-500 underline"
          href={"https://github.com/muriloux"}
          target="_blank"
        >
          github.com/muriloux
        </Link>
      </ContactListItem>
      <ContactListItem>
        <FiLinkedin />
        &nbsp;LinkedIn:&nbsp;
        <Link
          className="text-sky-500 underline"
          href={"https://www.linkedin.com/in/murilomeloux/"}
          target="_blank"
        >
          linkedin.com/in/murilomeloux
        </Link>
      </ContactListItem>
      <ContactListItem>
        <IconWhatsapp />
        &nbsp;WhatsApp:&nbsp;
        <Link
          className="text-sky-500 underline"
          href={"https://wa.me/5591981196794"}
          target="_blank"
        >
          wa.me/MuriloMelo
        </Link>
      </ContactListItem>
    </ul>
  );
}
