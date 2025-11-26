import ProductItemCard from "./ProductItemCard";
import ShopCardHeader from "./ShopCardHeader";

const ProductsShopCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#FAFAFA]">
      <ShopCardHeader />
      <ProductItemCard />
    </div>
  );
};

export default ProductsShopCard;
