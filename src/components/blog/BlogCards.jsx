import BlogCardItem from "./BlogCardItem";

const BlogCards = () => {
  return (
    <div className="w-full px-10 lg:w-[75%] mx-auto py-8 my-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex lg:flex-row lg:items-center  gap-10 lg:px-10">
          <BlogCardItem img={1} />
          <BlogCardItem img={2} />
        </div>
        <div className="flex flex-col lg:flex lg:flex-row lg:items-center gap-10 lg:px-10">
          <BlogCardItem img={3} />
          <BlogCardItem img={4} />
        </div>
        <div className="flex flex-col lg:flex lg:flex-row lg:items-center gap-10 lg:px-10">
          <BlogCardItem img={5} />
          <BlogCardItem img={6} />
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
