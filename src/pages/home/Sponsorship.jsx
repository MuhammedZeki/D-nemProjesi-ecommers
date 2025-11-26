import {
  FaAws,
  FaRedditAlien,
  FaStripe,
  FaHooli,
  FaLyft,
} from "react-icons/fa";
import { DiEnvato } from "react-icons/di";
const Sponsorship = () => {
  return (
    <div className=" bg-[#FAFAFA]">
      <div className="lg:flex lg:flex-row lg:gap-4 w-[75%] mx-auto lg:py-24 lg:px-4 flex flex-col py-10 items-center lg:items-start">
        <FaHooli className="text-[#737373] h-36 w-36 grow" />
        <FaLyft className="text-[#737373] h-36 w-36 grow" />
        <DiEnvato className="text-[#737373] h-36 w-36 grow" />
        <FaStripe className="text-[#737373] h-36 w-36 grow" />
        <FaAws className="text-[#737373] h-36 w-36 grow" />
        <FaRedditAlien className="text-[#737373] h-36 w-36 grow" />
      </div>
    </div>
  );
};

export default Sponsorship;
