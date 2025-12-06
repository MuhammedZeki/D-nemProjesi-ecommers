import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ShopCardHeader = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-0 lg:flex lg:flex-row items-center lg:justify-between w-full px-10 lg:w-[75%] mx-auto py-8 font-montserrat">
      <h2 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
        Shop
      </h2>
      <div className="flex items-center gap-2 font-montserrat">
        <p className="font-bold leading-6 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
          Home
        </p>
        <IoIosArrowForward className="text-[#BDBDBD] w-6 h-6 dark:text-[#fafafa]" />
        <p className="font-bold leading-6 tracking-[0.2px] text-[#BDBDBD] dark:text-[#d3d3d3]">
          Shop
        </p>
      </div>
    </div>
  );
};

export default ShopCardHeader;
