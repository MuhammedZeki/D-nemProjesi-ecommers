import React from "react";
import BreadNav from "../components/Breads/BreadNav";
import BreadItem from "../components/Breads/BreadItem";

const Desserts = () => {
  return (
    <div className="w-[75%] mx-auto py-8  px-4">
      <div className="flex gap-2.5">
        <div className="w-2/3  font-montserrat ">
          <div className=" py-2 border-b-2 border-b-[#ECECEC]">
            <BreadNav />
          </div>
          <div className="flex flex-col gap-3 font-montserrat">
            <div className="flex items-center gap-2 flex-wrap">
              <BreadItem img={"/explore/caramel.png"} />
              <BreadItem img={"/explore/elma.jpg"} />
              <BreadItem img={"/explore/et.jpg"} />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <BreadItem img={"/explore/caramel.png"} />
              <BreadItem img={"/explore/elma.jpg"} />
              <BreadItem img={"/explore/et.jpg"} />
            </div>
          </div>
        </div>
        <div className="w-1/3 relative">
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
