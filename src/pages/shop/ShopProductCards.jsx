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
      <div className="w-full flex items-center justify-center ">
        <div className="border border-[#BDBDBD] font-montserrat rounded-lg flex items-center">
          <div className="flex cursor-pointer rounded-tl-lg rounded-bl-lg items-center justify-between font-bold leading-6 tracking-[0.2px text-[#BDBDBD] bg-[#F3F3F3] p-5">
            First
          </div>
          <div className="border-x cursor-pointer border-x-[#E9E9E9] flex items-center justify-between font-bold leading-6 tracking-[0.2px text-[#23A6F0] p-5">
            1
          </div>
          <div className="border-r cursor-pointer border-r-[#E9E9E9] flex items-center justify-between font-bold leading-6 tracking-[0.2px text-[#ffffff] bg-[#23A6F0] p-5">
            2
          </div>
          <div className="border-r cursor-pointer border-r-[#E9E9E9] flex items-center justify-between font-bold leading-6 tracking-[0.2px text-[#23A6F0] p-5">
            3
          </div>
          <div className="flex items-center cursor-pointer justify-between font-bold leading-6 tracking-[0.2px text-[#23A6F0] p-5">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCards;
