import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const PageNumber = () => {
  return (
    <div className="flex items-center text-2xl gap-4 row-start-3  ">
      <button className=" hover:border-white hover:rounded-full hover:border-2 hover:text-[#B6CCDA] hover:bg-white">
        <IoIosArrowRoundBack />
      </button>
      <p>1</p>
      <button className=" hover:border-white hover:rounded-full hover:border-2 hover:text-[#B6CCDA] hover:bg-white">
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
};

export default PageNumber;
