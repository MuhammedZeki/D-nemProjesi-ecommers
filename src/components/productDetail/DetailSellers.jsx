import DetailSellerItem from "./DetailSellerItem";

const DetailSellers = () => {
  return (
    <div className=" bg-[#FAFAFA]">
      <div className=" w-full px-10 lg:w-[75%] mx-auto mt-3 py-8 flex flex-col gap-12  font-montserrat">
        <div className="border-b border-b-[#ECECEC] py-4">
          <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-6 ">
            <DetailSellerItem img={"/explore/caramel.png"} />
            <DetailSellerItem img={"/explore/elma.jpg"} />
            <DetailSellerItem img={"/explore/et.jpg"} />
            <DetailSellerItem img={"/explore/caramel.png"} />
            <DetailSellerItem img={"/explore/elma.jpg"} />
          </div>
          <div className="flex items-center gap-6 ">
            <DetailSellerItem img={"/explore/caramel.png"} />
            <DetailSellerItem img={"/explore/elma.jpg"} />
            <DetailSellerItem img={"/explore/et.jpg"} />
            <DetailSellerItem img={"/explore/caramel.png"} />
            <DetailSellerItem img={"/explore/elma.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSellers;
