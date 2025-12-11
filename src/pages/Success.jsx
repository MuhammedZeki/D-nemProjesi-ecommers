import UpperMenu from "../components/home/UpperMenu";
import SuccessContent from "../components/success/SuccessContent";
import Footer from "./home/Footer";

const Success = () => {
  return (
    <div className="bg-white dark:bg-[#252B42]">
      <UpperMenu />
      <SuccessContent />
      <Footer />
    </div>
  );
};

export default Success;
