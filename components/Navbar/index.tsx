import { useState, SyntheticEvent, FunctionComponent } from "react";
import { NavHamburguer } from "./NavHamburguer";
import { NavItems } from "./NavItems";

interface IProps {}

export const Navbar: FunctionComponent<IProps> = () => {
  const [openHamburguer, setOpenHamburguer] = useState(false);

  return (
    <nav className="flex flex-initial md:flex-row items-center justify-between">
      <div>
        <NavHamburguer open={openHamburguer} setOpen={setOpenHamburguer} />
        <NavItems open={openHamburguer} setOpen={setOpenHamburguer} />
      </div>
      <div className="container md:w-auto md:float-right flex flex-row ml-auto float-right justify-between">
        {/* <NavButton>
          <Image alt="Portuguese" src="/Pt.svg" width={100} height={100} />
        </NavButton> */}
      </div>
    </nav>
  );
};
