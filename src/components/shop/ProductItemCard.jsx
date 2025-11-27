import ProductItem from "./ProductItem";

const ProductItemCard = () => {
  return (
    <div
      className="flex flex-col gap-8
    lg:flex lg:flex-row lg:gap-4 w-full px-10 lg:w-[75%] mx-auto py-8"
    >
      <ProductItem img={"/products/et-1.jpg"} />
      <ProductItem img={"/products/et-1.jpg"} />
      <ProductItem img={"/products/et-1.jpg"} />
      <ProductItem img={"/products/et-1.jpg"} />
      <ProductItem img={"/products/et-1.jpg"} />
    </div>
  );
};

export default ProductItemCard;
