import BreadNav from "../../components/Breads/BreadNav";
import DessertsItem from "../../components/home/Desserts/DessertsItem";
import useProducts from "../../hooks/useProducts";

const Desserts = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className="lg:w-[75%] lg:mx-auto lg:py-8 lg:px-4 flex flex-col gap-4 ">
      <div className="lg:flex lg:flex-row flex flex-col-reverse gap-2.5">
        <div className="lg:w-2/3 w-full  font-montserrat ">
          <div className=" pb-5 px-1 border-b-2 border-b-[#ECECEC]">
            <BreadNav />
          </div>
          <div className="flex flex-col gap-4 font-montserrat">
            <div className="lg:flex lg:flex-row lg:items-center lg:gap-1 gap-6 mt-6 lg:mt-0 flex-wrap flex flex-col py-2 ">
              {data.slice(5, 11).map((item, i) => (
                <DessertsItem key={i} item={item} />
              ))}
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
