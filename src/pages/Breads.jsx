import BreadItem from "../components/Breads/BreadItem";
import BreadNav from "../components/Breads/BreadNav";
const Breads = () => {
  return (
    <div className="w-[75%] mx-auto py-8  px-4">
      <div className="lg:flex lg:flex-row gap-2.5 flex flex-col ">
        <div className="lg:w-1/3 relative w-full ">
          <img
            src="/breads/e.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute flex flex-col gap-1 font-montserrat top-8 left-8">
            <h6 className="font-bold text-md leading-6 tracking-[0.2px] text-[#252B42]">
              FURNITURE
            </h6>
            <p className="font-bold text-md leading-6 tracking-[0.2px] text-[#737373]">
              5 Items
            </p>
          </div>
        </div>
        <div className="lg:w-2/3 w-full  font-montserrat ">
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
      </div>
    </div>
  );
};

export default Breads;
