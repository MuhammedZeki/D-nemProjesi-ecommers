import BlogCards from "../components/blog/BlogCards";
import UpperMenu from "../components/home/UpperMenu";
import Footer from "./home/Footer";

const Blog = () => {
  return (
    <div className="bg-white dark:bg-[#252B42]">
      <UpperMenu />
      <BlogCards />
      <Footer />
    </div>
  );
};

export default Blog;
