import { IoLogoApple } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="col-start-2 col-end-5">
      <div>
        <nav className="flex flex-row justify-between items-center">
          <a href="#">
            <div>
              <IoLogoApple className="text-5xl" />
            </div>
          </a>
          <ol className="flex flex-row gap-5 text-l ">
            <NavLinks linkTekst={"Mac"}></NavLinks>
            <NavLinks linkTekst={"iPhone"}></NavLinks>
            <NavLinks linkTekst={"iPad"}></NavLinks>
            <NavLinks linkTekst={"iWatch"}></NavLinks>
            <NavLinks linkTekst={"Support"}></NavLinks>
          </ol>
          <div className="flex flex-row ">
            <a className="hover:text-green-400" href="#">
              <IoSearch className="text-l" />
            </a>

            <IoRemoveOutline className="rotate-90 text-l" />
            <a className="hover:text-green-400" href="#">
              <FiShoppingBag className="text-l" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
