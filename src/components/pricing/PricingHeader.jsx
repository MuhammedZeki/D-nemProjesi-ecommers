import { IoIosArrowForward } from "react-icons/io";

const PricingHeader = () => {
  return (
    <div className="flex items-center justify-center w-full px-10 lg:w-[75%] my-8 mx-auto py-8">
      <div className="flex flex-col items-center justify-center gap-6 font-montserrat">
        <h5 className="font-bold leading-6 tracking-[0.1px] text-[#737373]">
          PRICING
        </h5>
        <h2 className="font-bold text-6xl leading-20 tracking-[0.2px] text-[#252B42] text-center lg:text-start">
          Simple Pricing
        </h2>
        <div className="flex items-center justify-center gap-3">
          <span className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
            Home
          </span>
          <IoIosArrowForward className="w-6 h-6 text-[#BDBDBD]" />
          <span className="font-bold leading-6 tracking-[0.2px] text-[#737373]">
            Pricing
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;
