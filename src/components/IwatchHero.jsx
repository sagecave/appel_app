import Image from "next/image";
const IwatchHero = ({ imgNavn, imgBeskrivelse }) => {
  return (
    <div>
      <Image src={imgNavn} alt={imgBeskrivelse} />
    </div>
  );
};

export default IwatchHero;
