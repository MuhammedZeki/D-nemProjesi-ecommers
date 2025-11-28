import UpperMenu from "../components/home/UpperMenu";
import DetailDescription from "../components/productDetail/DetailDescription";
import ProductDetailContent from "./product/ProductDetailContent";

const ProductDetails = () => {
  return (
    <div>
      <UpperMenu />
      <ProductDetailContent />
      <DetailDescription />
    </div>
  );
};

export default ProductDetails;
