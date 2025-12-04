import UpperMenu from "../components/home/UpperMenu";
import DetailDescription from "../components/productDetail/DetailDescription";
import ProductDetailContent from "./product/ProductDetailContent";
import Sponsorship from "./home/Sponsorship";
import Footer from "./home/Footer";
import DetailSellers from "../components/productDetail/DetailSellers";
import CounterContextProvider from "../context/CounterContext";

const ProductDetails = () => {
  return (
    <div>
      <UpperMenu />
      <CounterContextProvider>
        <ProductDetailContent />
      </CounterContextProvider>
      <DetailDescription />
      <DetailSellers />
      <Sponsorship />
      <Footer />
    </div>
  );
};

export default ProductDetails;
