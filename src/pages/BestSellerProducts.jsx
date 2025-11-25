import SellerItem from "../components/bestSellers/SellerItem";

const BestSellerProducts = () => {
  return (
    <div className=" bg-[#FAFAFA]">
      <div className=" flex flex-col gap-4 w-[75%] mx-auto py-8 px-4  font-montserrat">
        <div className="py-3 border-b-2 border-[#ECECEC]">
          <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="py-2 flex gap-2">
          <SellerItem img={"p1.png"} />
          <SellerItem img={"p2.jpg"} />
          <SellerItem img={"p3.jpg"} />
          <SellerItem img={"p4.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default BestSellerProducts;
