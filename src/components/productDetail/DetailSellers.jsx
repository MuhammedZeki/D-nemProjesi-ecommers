import axios from "axios";
import DetailSellerItem from "./DetailSellerItem";
import { useQuery } from "@tanstack/react-query";

const DetailSellers = () => {
  const getDetailsSellerItemData = async () => {
    const res = await axios.get("/db.json");
    return res.data.ProductDetails.detailSellerItem;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["detailSellerItem"],
    queryFn: getDetailsSellerItemData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className=" bg-[#FAFAFA]">
      <div className=" w-full px-10 lg:w-[75%] mx-auto mt-3 py-8 flex flex-col gap-12  font-montserrat">
        <div className="border-b border-b-[#ECECEC] py-4">
          <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-start">
          {data.map((item, i) => (
            <DetailSellerItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailSellers;
