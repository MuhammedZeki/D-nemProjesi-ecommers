import { IoIosArrowForward } from "react-icons/io";
const DetailHeader = () => {
  return (
    <div className="border border-black py-4 flex items-start font-montserrat">
      <div className="flex items-center gap-2">
        <p className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
          Home
        </p>
        <IoIosArrowForward className="text-[#BDBDBD] w-6 h-6" />
        <p className="font-bold leading-6 tracking-[0.2px] text-[#BDBDBD]">
          Shop
        </p>
      </div>
    </div>
  );
};

export default DetailHeader;
