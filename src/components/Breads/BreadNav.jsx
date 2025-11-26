import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BreadNav = () => {
  return (
    <div className="lg:flex lg:flex-row items-center lg:justify-between lg:gap-2 flex flex-col gap-10 mt-8 lg:mt-0">
      <div className="font-bold text-center lg:text-start text-2xl leading-6 tracking-[0.1px] text-[#252B42] ">
        BESTSELLER PRODUCTS
      </div>
      <div
        className="lg:flex lg:flex-row lg:justify-between gap-12
      flex flex-col items-center "
      >
        <div className="flex items-center gap-10">
          <div className="font-bold text-xl leading-6 tracking-[0.2px] text-[#23A6F0]">
            Men
          </div>
          <div className="font-bold text-xl leading-6 tracking-[0.2px] text-[#737373]">
            Women
          </div>
          <div className="font-bold text-xl leading-6 tracking-[0.2px] text-[#737373]">
            Accessories
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="border border-[#BDBDBD] rounded-full flex items-center justify-center p-4">
            <IoIosArrowBack className="h-6 w-6 text-[#BDBDBD]" />
          </div>
          <div className="border border-[#737373] rounded-full flex items-center justify-center p-4">
            <IoIosArrowForward className="h-6 w-6 text-[#737373]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadNav;
