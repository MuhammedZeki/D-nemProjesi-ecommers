import axios from "axios";
import PostItem from "../../components/posts/PostItem";
import { useQuery } from "@tanstack/react-query";
const FeaturedPosts = () => {
  const getFeaturedData = async () => {
    const res = await axios.get("/db.json");
    return res.data.Home.featured;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["featured"],
    queryFn: getFeaturedData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className=" flex flex-col gap-4 lg:w-[75%] lg:mx-auto lg:py-24 lg:px-4 px-10 my-14 lg:my-0">
      <div className="flex flex-col gap-6 items-center justify-center font-montserrat">
        <h6 className="font-bold leading-6 tracking-[0.2px] text-[#23A6F0]">
          Practice Advice
        </h6>
        <h3 className="font-bold leading-12 text-4xl tracking-[0.2px] text-[#252B42] text-center lg:text-start">
          Featured Posts
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
