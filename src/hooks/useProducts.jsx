import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
  const getProductData = async () => {
    const res = await axios.get("/db.json");
    return res.data.ProductItems;
  };

  return useQuery({
    queryKey: ["productItems"],
    queryFn: getProductData,
  });
};

export default useProducts;
