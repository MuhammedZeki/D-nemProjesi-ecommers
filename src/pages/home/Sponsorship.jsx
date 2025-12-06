import {
  FaAws,
  FaRedditAlien,
  FaStripe,
  FaHooli,
  FaLyft,
} from "react-icons/fa";
import { DiEnvato } from "react-icons/di";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const iconMap = {
  FaAws,
  FaRedditAlien,
  FaStripe,
  FaHooli,
  FaLyft,
  DiEnvato,
};

const Sponsorship = () => {
  const getSponsorshipData = async () => {
    const res = await axios.get("/db.json");
    return res.data.Home.sponsorship;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["sponsorship"],
    queryFn: getSponsorshipData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className=" bg-[#FAFAFA] dark:bg-[#3d445f]">
      <div className="lg:flex lg:flex-row lg:gap-4 w-[75%] mx-auto lg:py-24 lg:px-4 flex flex-col py-10 items-center lg:items-start">
        {data.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <Icon
              key={i}
              className="text-[#737373] dark:text-[#fafafa] h-30 w-30 grow"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sponsorship;
