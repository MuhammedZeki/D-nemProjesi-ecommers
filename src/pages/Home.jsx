import BestSellerProducts from "./home/BestSellerProducts";
import Breads from "./home/Breads";
import Desserts from "./home/Desserts";
import Explore from "./home/Explore";
import FeaturedPosts from "./home/FeaturedPosts";
import Footer from "./home/Footer";
import HomePage from "./home/HomePage";
import ProductsCard1 from "./home/ProductsCard1";
import ProductsCard2 from "./home/ProductsCard2";
import Sponsorship from "./home/Sponsorship";

const Home = () => {
  return (
    <div>
      <HomePage />
      <Explore />
      <Breads />
      <ProductsCard1 />
      <Desserts />
      <ProductsCard2 />
      <BestSellerProducts />
      <Sponsorship />
      <FeaturedPosts />
      <Footer />
    </div>
  );
};

export default Home;
