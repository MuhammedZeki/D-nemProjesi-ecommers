import ProductCardItem from "../../components/shop/ProductCardItem";

const ShopProductCards = () => {
  return (
    <div className="w-full px-10 lg:w-[75%] mx-auto py-12 my-8 flex flex-col gap-24 ">
      <div className="flex items-center gap-3">
        <ProductCardItem img={"/explore/caramel.png"} />
        <ProductCardItem img={"/explore/elma.jpg"} />
        <ProductCardItem img={"/explore/et.jpg"} />
        <ProductCardItem img={"/explore/caramel.png"} />
      </div>
      <div className="flex items-center gap-3">
        <ProductCardItem img={"/explore/caramel.png"} />
        <ProductCardItem img={"/explore/elma.jpg"} />
        <ProductCardItem img={"/explore/et.jpg"} />
        <ProductCardItem img={"/explore/caramel.png"} />
      </div>
      <div className="flex items-center gap-3">
        <ProductCardItem img={"/explore/caramel.png"} />
        <ProductCardItem img={"/explore/elma.jpg"} />
        <ProductCardItem img={"/explore/et.jpg"} />
        <ProductCardItem img={"/explore/caramel.png"} />
      </div>
    </div>
  );
};

export default ShopProductCards;
