import UpperMenu from "../components/home/UpperMenu";
import ProductsShopCard from "../components/shop/ProductsShopCard";
import Footer from "./home/Footer";
import Sponsorship from "./home/Sponsorship";
import ShopContent from "./shop/ShopContent";
import ShopProductCards from "./shop/ShopProductCards";

const Shop = () => {
  return (
    <div>
      <UpperMenu />
      <ProductsShopCard />
      <ShopContent />
      <ShopProductCards />
      <Sponsorship />
      <Footer />
    </div>
  );
};

export default Shop;
