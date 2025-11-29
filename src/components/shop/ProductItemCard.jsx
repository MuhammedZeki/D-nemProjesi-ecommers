import ProductItem from "./ProductItem";

const ProductItemCard = () => {
  return (
    <div
      className="flex flex-col gap-8
    lg:flex lg:flex-row lg:gap-4 w-full px-10 lg:w-[75%] mx-auto py-8"
    >
      <ProductItem img={"/shop/shop1.jpg"} name={"Vegetables"} />
      <ProductItem img={"/shop/shop2.jpg"} name={"Ice Cream"} />
      <ProductItem img={"/shop/shop3.jpg"} name={"Meat"} />
      <ProductItem img={"/shop/shop4.jpg"} name={"Chocolate"} />
      <ProductItem img={"/shop/shop5.jpg"} name={"Soup"} />
    </div>
  );
};

export default ProductItemCard;
