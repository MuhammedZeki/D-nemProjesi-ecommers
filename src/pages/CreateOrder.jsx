import UpperMenu from "../components/home/UpperMenu";
import CreateOrderContent from "../components/order/createOrderPage/CreateOrderContent";
import Footer from "./home/Footer";

export const CreateOrder = () => {
  return (
    <div className="bg-white dark:bg-[#252B42] ">
      <UpperMenu />
      <CreateOrderContent />
      <Footer />
    </div>
  );
};
