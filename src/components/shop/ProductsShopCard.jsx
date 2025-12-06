import ProductItemCard from "./ProductItemCard";
import ShopCardHeader from "./ShopCardHeader";

const ProductsShopCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#FAFAFA] dark:bg-[#252B42]">
      <ShopCardHeader />
      <ProductItemCard />
    </div>
  );
};

export default ProductsShopCard;
