import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ExploreItem from "./ExploreItem";
import { useLang } from "../../context/LangContext";

const Explore = () => {
  const { lang } = useLang();
  const getExploreData = async () => {
    const res = await axios.get("/db.json");
    return res.data[lang].Home.explores;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["explores", lang],
    queryFn: getExploreData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#252B42] p-6 -mt-2">
      <div className="w-[75%] mx-auto flex items-center gap-4 flex-wrap">
        {data.map((item, i) => (
          <ExploreItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
