import DetailContent from "../../components/productDetail/DetailContent";
import DetailHeader from "../../components/productDetail/DetailHeader";

const ProductDetailContent = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#252b42]">
      <div className=" w-full px-10 lg:w-[75%] mx-auto py-8 flex flex-col gap-3">
        <DetailHeader />
        <DetailContent />
      </div>
    </div>
  );
};

export default ProductDetailContent;
