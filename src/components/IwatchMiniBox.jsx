import Image from "next/image";
const IwatchMiniBox = ({ miniBoxColor, miniColorHover, miniImgNavn, miniImgBeskrivelse }) => {
  return (
    <div className={`w-32 h-24 rounded-lg ${miniBoxColor} ${miniColorHover}`}>
      <Image className=" relative bottom-10" src={miniImgNavn} alt={miniImgBeskrivelse} />
    </div>
  );
};

export default IwatchMiniBox;
