import DetailContent from "../../components/productDetail/DetailContent";
import DetailHeader from "../../components/productDetail/DetailHeader";

const ProductDetailContent = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="border border-black w-full px-10 lg:w-[75%] mx-auto py-8 flex flex-col gap-3">
        <DetailHeader />
        <DetailContent />
      </div>
    </div>
  );
};

export default ProductDetailContent;
