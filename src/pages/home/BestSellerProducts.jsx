import axios from "axios";
import SellerItem from "../../components/bestSellers/SellerItem";
import { useQuery } from "@tanstack/react-query";

const BestSellerProducts = () => {
  const getDessertData = async () => {
    const res = await axios.get("/db.json");
    return res.data.Home.bestSellers;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["bestSellers"],
    queryFn: getDessertData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className=" bg-[#FAFAFA]">
      <div className=" flex flex-col gap-4 lg:w-[75%] w-full mx-auto py-8 px-4  font-montserrat">
        <div className="py-3 border-b-2 border-[#ECECEC]">
          <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] text-center lg:text-start">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="py-2 lg:flex lg:flex-row lg:gap-4 flex flex-col gap-10">
          {data.map((item, i) => (
            <SellerItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellerProducts;
