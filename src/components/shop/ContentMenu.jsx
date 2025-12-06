import { HiViewGrid } from "react-icons/hi";
import { TbListCheck } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
const ContentMenu = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-0 lg:flex lg:flex-row items-center mt-4 justify-between font-montserrat">
      <p className="font-bold leading-6 tracking-[0.2px]  text-[#737373] dark:text-[#fafafa]">
        Showing all 12 results
      </p>
      <div className="flex items-center gap-4">
        <p className="font-bold  leading-6 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
          Views:
        </p>
        <div className="flex items-center gap-3 ">
          <div className="border border-[#ECECEC] p-3 rounded-lg dark:text-[#fafafa]">
            <HiViewGrid className="w-6 h-6" />
          </div>
          <div className="border border-[#ECECEC] p-3 rounded-lg dark:text-[#fafafa]">
            <TbListCheck className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center cursor-pointer gap-2 border border-[#DDDDDD] bg-[#F9F9F9] rounded-lg px-2 py-3 ">
          <p className="font-normal leading-7 tracking-[0.2px] text-[#737373]">
            Popularity
          </p>
          <IoIosArrowDown className="text-[#737373] h-6 w-6" />
        </button>
        <button className="flex items-center gap-2 cursor-pointer bg-[#23A6F0] rounded-lg px-8 py-3 ">
          <p className="font-normal leading-7 tracking-[0.2px] text-white">
            Filter
          </p>
          <CiFilter className="text-white h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ContentMenu;
