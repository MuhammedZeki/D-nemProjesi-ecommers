import axios from "axios";
import ProductCardItem from "../../components/shop/ProductCardItem";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ShopProductCards = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const getShopCardItemData = async () => {
    const res = await axios.get("/db.json");
    return res.data.Shop.shopItemCard;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["shopItemCard"],
    queryFn: getShopCardItemData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = data.slice(start, end);

  return (
    <div className="w-full px-10 lg:w-[75%] mx-auto py-12 my-8 flex flex-col gap-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentItems.map((item, i) => (
          <ProductCardItem key={i} item={item} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="border border-[#BDBDBD] font-montserrat rounded-lg flex items-center">
          <div
            onClick={() => setPage(1)}
            className="flex cursor-pointer rounded-tl-lg rounded-bl-lg items-center justify-between font-bold leading-6 text-[#BDBDBD] bg-[#F3F3F3] p-5"
          >
            Previous
          </div>

          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            const isActive = page === pageNum;

            return (
              <div
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`cursor-pointer border-x border-[#E9E9E9] font-bold p-5 
                ${isActive ? "bg-[#23A6F0] text-white" : "text-[#23A6F0]"}
              `}
              >
                {pageNum}
              </div>
            );
          })}

          <div
            onClick={() => setPage((p) => (p < totalPages ? p + 1 : p))}
            className="flex items-center cursor-pointer justify-between font-bold leading-6 text-[#23A6F0] p-5"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCards;
