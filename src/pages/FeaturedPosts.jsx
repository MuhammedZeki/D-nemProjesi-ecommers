import PostItem from "../components/posts/PostItem";
const FeaturedPosts = () => {
  return (
    <div className=" flex flex-col gap-4 w-[75%] mx-auto py-24 px-4">
      <div className="flex flex-col gap-2 items-center justify-center font-montserrat">
        <h6 className="font-bold leading-6 tracking-[0.2px] text-[#23A6F0]">
          Practice Advice
        </h6>
        <h3 className="font-bold leading-12 text-4xl tracking-[0.2px] text-[#252B42]">
          Featured Posts
        </h3>
      </div>
      <div className="flex items-center gap-6">
        <PostItem img="1" />
        <PostItem img="2" />
        <PostItem img="3" />
      </div>
    </div>
  );
};

export default FeaturedPosts;
