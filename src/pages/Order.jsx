import UpperMenu from "../components/home/UpperMenu";
import OrderContent from "../components/order/OrderContent";
import CounterContextProvider from "../context/CounterContext";
import Footer from "./home/Footer";

const Order = () => {
  return (
    <div className="bg-white dark:bg-[#252B42] ">
      <UpperMenu />
      <CounterContextProvider>
        <OrderContent />
      </CounterContextProvider>
      <Footer />
    </div>
  );
};

export default Order;
