import axios from "axios";
import ProductItem from "./ProductItem";
import { useQuery } from "@tanstack/react-query";

const ProductItemCard = () => {
  const getShopCardData = async () => {
    const res = await axios.get("/db.json");
    return res.data.Shop.shopCards;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["shopCards"],
    queryFn: getShopCardData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full px-10 lg:w-[75%] mx-auto py-8">
      {data.map((item, i) => (
        <ProductItem key={i} item={item} />
      ))}
    </div>
  );
};

export default ProductItemCard;
