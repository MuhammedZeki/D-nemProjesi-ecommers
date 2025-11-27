import UpperMenu from "../components/home/UpperMenu";
import ProductsShopCard from "../components/shop/ProductsShopCard";
import ShopContent from "./shop/ShopContent";
import ShopProductCards from "./shop/ShopProductCards";

const Shop = () => {
  return (
    <div>
      <UpperMenu />
      <ProductsShopCard />
      <ShopContent />
      <ShopProductCards />
    </div>
  );
};

export default Shop;
