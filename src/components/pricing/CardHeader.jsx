import React from "react";

const CardHeader = () => {
  return (
    <div className="border border-black flex flex-col  gap-5 font-montserrat">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl leading-12 tracking-[0.2px] text-[#252B42]">
          Pricing
        </h2>
        <p className="font-medium leading-5 tracking-[0.2px] text-[#737373] max-w-1/2 text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="font-bold leading-6 tracking-[0.1px] text-[#252B42]">
          Monthly
        </p>
        <div className="border border-[#23A6F0] rounded-full w-[45px] h-[25px] flex items-center">
          <div className="w-5 h-5 bg-[#EBEBEB] border border-[#D0D0D0] rounded-full ml-1"></div>
        </div>
        <p className="font-bold leading-6 tracking-[0.1px] text-[#252B42]">
          Yearly
        </p>
        <div className="bg-[#B2E3FF] flex items-center justify-center text-[#23A6F0] py-3 px-8 rounded-full font-bold leading-6 tracking-[0.2px]">
          Save 25%
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
