import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import Breads from "./pages/Breads";
import ProductsCard1 from "./pages/ProductsCard1";
import Desserts from "./pages/Desserts";
import ProductsCard2 from "./pages/ProductsCard2";
import BestSellerProducts from "./pages/BestSellerProducts";
import Sponsorship from "./pages/Sponsorship";
import FeaturedPosts from "./pages/FeaturedPosts";

const App = () => {
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
    </div>
  );
};

export default App;
