import BreadItem from "../components/Breads/BreadItem";
import BreadNav from "../components/Breads/BreadNav";
const Breads = () => {
  return (
    <div className=" w-[75%] mx-auto py-8  px-4">
      <div className="flex gap-2.5">
        <div className="w-1/3 ">
          <img src="/breads/e.jpg" alt="" className="object-contain w-full" />
        </div>
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
      </div>
    </div>
  );
};

export default Breads;
