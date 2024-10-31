import IwatchHero from "./IwatchHero";
import Titel from "./Titel";
import Navy from "../images/navy.png";
import Image from "next/image";

import ColorPalette from "./ColorPalette";
import Cta from "./Cta";
import PageNumber from "./PageNumber";
import IwatchDisplay from "./IwatchDisplay";

const MainSection = () => {
  return (
    <main className="py-20 px-2 col-start-1 col-end-6 grid grid-cols-subgrid ">
      <section className="grid grid-cols-subgrid grid-rows-[3fr_1fr_1fr]  col-start-2 col-end-5 ">
        <Titel></Titel>

        <IwatchHero imgNavn={Navy} imgBeskrivelse={"Apple watch i farven navy"}></IwatchHero>
        <ColorPalette></ColorPalette>
        <Cta></Cta>
        <PageNumber></PageNumber>
        <IwatchDisplay></IwatchDisplay>
      </section>
    </main>
  );
};

export default MainSection;
