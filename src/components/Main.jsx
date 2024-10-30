import IwatchHero from "./IwatchHero";
import Titel from "./Titel";
import Navy from "@/images/navy.png";

import Mint from "@/images/mint.png";
import Ocean from "@/images/ocean.png";

const MainSection = () => {
  return (
    <main className="py-20 px-2 col-start-1 col-end-6 grid grid-cols-subgrid">
      <section className="grid grid-cols-subgrid col-start-2 col-end-5 ">
        <Titel></Titel>

        <IwatchHero imgNavn={Navy} imgBeskrivelse={"Apple watch i farven navy"}></IwatchHero>
      </section>
    </main>
  );
};

export default MainSection;
