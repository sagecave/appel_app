import Button from "./Button";
import { TbLineDotted } from "react-icons/tb";
const ColorPalette = () => {
  return (
    <div className="flex flex-col  justify-center relative items-center ">
      <Button knappeFarve={"bg-[#404354]"}> </Button>
      <TbLineDotted className=" rotate-90  text-3xl" />
      <Button knappeFarve={"bg-[#58D7C4]"}> </Button>
      <TbLineDotted className="rotate-90 text-3xl " />
      <Button knappeFarve={"bg-[#F2CEC6]"}> </Button>
    </div>
  );
};

export default ColorPalette;
