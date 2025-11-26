import React from "react";
import BreadNav from "../../components/Breads/BreadNav";
import BreadItem from "../../components/Breads/BreadItem";

const Desserts = () => {
  return (
    <div className="lg:w-[75%] lg:mx-auto lg:py-8 lg:px-4 flex flex-col gap-4 ">
      <div className="lg:flex lg:flex-row flex flex-col-reverse gap-2.5">
        <div className="lg:w-2/3 w-full  font-montserrat ">
          <div className=" py-2 border-b-2 border-b-[#ECECEC]">
            <BreadNav />
          </div>
          <div className="flex flex-col gap-4 font-montserrat">
            <div className="lg:flex lg:flex-row lg:items-center lg:gap-2 gap-6 mt-6 lg:mt-0 flex-wrap flex flex-col">
              <BreadItem img={"/explore/caramel.png"} />
              <BreadItem img={"/explore/elma.jpg"} />
              <BreadItem img={"/explore/et.jpg"} />
            </div>
            <div className="lg:flex lg:flex-row lg:items-center lg:gap-2 gap-6 flex-wrap mb-6 lg:mb-0 flex flex-col">
              <BreadItem img={"/explore/caramel.png"} />
              <BreadItem img={"/explore/elma.jpg"} />
              <BreadItem img={"/explore/et.jpg"} />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full relative">
          <img src="/desserts/d1.jpg" className="object-cover w-full h-full" />
          <div className="absolute flex flex-col gap-1 font-montserrat top-8 left-8">
            <h6 className="font-bold text-md leading-6 tracking-[0.2px] text-[#252B42]">
              FURNITURE
            </h6>
            <p className="font-bold text-md leading-6 tracking-[0.2px] text-[#737373]">
              5 Items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desserts;
