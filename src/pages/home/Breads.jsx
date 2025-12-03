import axios from "axios";
import BreadItem from "../../components/Breads/BreadItem";
import BreadNav from "../../components/Breads/BreadNav";
import { useQuery } from "@tanstack/react-query";
const Breads = () => {
  const getBreadData = async () => {
    const res = await axios.get("/db.json");
    return res.data.Home.breadItems;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["breadItems"],
    queryFn: getBreadData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className="lg:w-[75%] lg:mx-auto lg:py-8  lg:px-4">
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
          <div className="flex flex-col gap-4 font-montserrat">
            <div className="lg:flex lg:flex-row lg:items-center lg:gap-2 gap-6 mt-6 lg:mt-0 flex-wrap flex flex-col">
              {data.map((item, i) => (
                <BreadItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breads;
