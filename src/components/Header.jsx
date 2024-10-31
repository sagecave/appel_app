import { IoLogoApple } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="col-start-2 col-end-5 ">
      <div>
        <nav className="flex flex-row justify-between items-center mt-10 relative">
          <a href="#">
            <div>
              <IoLogoApple className="text-6xl" />
            </div>
          </a>
          <ol className="flex flex-row gap-5 text-xl ">
            <NavLinks linkTekst={"Mac"}></NavLinks>
            <NavLinks linkTekst={"iPhone"}></NavLinks>
            <NavLinks linkTekst={"iPad"}></NavLinks>
            <NavLinks linkTekst={"iWatch"}></NavLinks>
            <NavLinks linkTekst={"Support"}></NavLinks>
          </ol>
          <div className="flex flex-row ">
            <a className="hover:text-[#B6CCDA]" href="#">
              <IoSearch className="text-xl" />
            </a>

            <IoRemoveOutline className="rotate-90 text-xl" />
            <a className="hover:text-green-400" href="#">
              <FiShoppingBag className="text-xl hover:text-[#B6CCDA]" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
