import axios from "axios";
import BlogCardItem from "./BlogCardItem";
import { useQuery } from "@tanstack/react-query";

const BlogCards = () => {
  const getShopCardData = async () => {
    const res = await axios.get("/db.json");
    return res.data.Blog.blogItems;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogItems"],
    queryFn: getShopCardData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className="w-full px-10 lg:w-[75%] mx-auto py-8 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, i) => (
          <BlogCardItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
