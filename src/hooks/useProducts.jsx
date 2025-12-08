import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLang } from "../context/LangContext";

const useProducts = () => {
  const { lang } = useLang();
  const getProductData = async () => {
    const res = await axios.get("/db.json");
    return res.data[lang].ProductItems;
  };

  return useQuery({
    queryKey: ["products", lang],
    queryFn: getProductData,
  });
};

export default useProducts;
