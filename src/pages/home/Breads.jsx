import BreadItem from "../../components/Breads/BreadItem";
import BreadNav from "../../components/Breads/BreadNav";
import useProducts from "../../hooks/useProducts";
const Breads = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className="lg:w-[75%] lg:mx-auto lg:py-8  lg:px-4">
      <div className="lg:flex lg:flex-row gap-2.5 flex flex-col ">
        <div className="lg:w-1/3 relative w-full ">
          <img src="/breads/img1.jpg" className="object-cover w-full h-full" />
          <div className="absolute flex flex-col gap-1 font-montserrat top-8 left-8">
            <h6 className="font-bold text-md leading-6 tracking-[0.2px] text-[#FAFAFA]">
              FURNITURE
            </h6>
            <p className="font-bold text-md leading-6 tracking-[0.2px] text-[#FAFAFA]">
              5 Items
            </p>
          </div>
        </div>
        <div className="lg:w-2/3 w-full font-montserrat ">
          <div className=" pb-5 px-2 border-b-2 border-b-[#ECECEC]">
            <BreadNav />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-24 xl:gap-6 mt-6 xl:mt-0 py-2">
            {data.slice(0, 6).map((item, i) => (
              <BreadItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breads;
