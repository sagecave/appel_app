import IwatchMiniBox from "./IwatchMiniBox";
import Mint from "../images/mint.png";
import Ocean from "../images/ocean.png";
import Navy from "../images/navy.png";
const IwatchDisplay = () => {
  return (
    <div className="row-start-3 col-start-2 col-end-3 flex gap-6 ">
      <IwatchMiniBox miniColorHover={"hover:bg-[#525461]"} miniBoxColor={"bg-[#434558]"} miniImgNavn={Navy} miniImgBeskrivelse={"blå apple watch"}></IwatchMiniBox>
      <IwatchMiniBox miniColorHover={"hover:bg-[#8AE5D7]"} miniBoxColor={"bg-[#6ADDCC]"} miniImgNavn={Mint} miniImgBeskrivelse={"grønt apple watch"}></IwatchMiniBox>
      <IwatchMiniBox miniColorHover={"hover:bg-[#FFDED7]"} miniBoxColor={"bg-[#F9CDC4]"} miniImgNavn={Ocean} miniImgBeskrivelse={"hvidt apple watch"}></IwatchMiniBox>
    </div>
  );
};

export default IwatchDisplay;
