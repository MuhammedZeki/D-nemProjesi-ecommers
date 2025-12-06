import ProductItemCard from "./ProductItemCard";
import ShopCardHeader from "./ShopCardHeader";

const ProductsShopCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#FAFAFA] dark:bg-[#3d445f]">
      <ShopCardHeader />
      <ProductItemCard />
    </div>
  );
};

export default ProductsShopCard;
