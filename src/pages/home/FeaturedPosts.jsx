import axios from "axios";
import PostItem from "../../components/posts/PostItem";
import { useQuery } from "@tanstack/react-query";
import { useLang } from "../../context/LangContext";
const FeaturedPosts = () => {
  const { lang } = useLang();
  const getFeaturedData = async () => {
    const res = await axios.get("/db.json");
    return res.data[lang].Home.featured;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["featured", lang],
    queryFn: getFeaturedData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className=" flex flex-col gap-4 lg:w-[75%] lg:mx-auto lg:py-24 lg:px-4 px-10 my-14 lg:my-0">
      <div className="flex flex-col gap-6 items-center justify-center font-montserrat">
        <h6 className="font-bold leading-6 tracking-[0.2px] text-[#23A6F0]">
          {lang === "en" ? "Practice Advice" : "Pratik Önerileri"}
        </h6>
        <h3 className="font-bold leading-12 text-4xl tracking-[0.2px] text-[#252B42] dark:text-[#fafafa] text-center lg:text-start">
          {lang === "en" ? "Featured Posts" : "Öne Çıkan Gönderiler"}
        </h3>
      </div>
      <div className="lg:flex lg:flex-row lg:items-center lg:gap-6 flex flex-col gap-16">
        {data.map((item, i) => (
          <PostItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
