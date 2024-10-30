const NavLinks = ({ linkTekst }) => {
  return (
    <a href="#" className="hover:bg-white hover:text-green-400 rounded-full px-8 py-2">
      <li>{linkTekst}</li>
    </a>
  );
};

export default NavLinks;
