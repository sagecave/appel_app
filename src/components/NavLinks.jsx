const NavLinks = ({ linkTekst }) => {
  return (
    <a href="#" className="hover:bg-white hover:text-[#B6CCDA] rounded-full px-8 py-2">
      <li>{linkTekst}</li>
    </a>
  );
};

export default NavLinks;
