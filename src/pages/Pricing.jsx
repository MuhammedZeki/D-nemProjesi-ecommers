import UpperMenu from "../components/home/UpperMenu";
import PricingCards from "../components/pricing/PricingCards";
import PricingHeader from "../components/pricing/PricingHeader";
import Sponsorship from "./home/Sponsorship";
import PricingDescription from "./../components/pricing/PricingDescription";
import PricingCallAction from "../components/pricing/PricingCallAction";
import Footer from "./home/Footer";

const Pricing = () => {
  return (
    <div className="bg-white dark:bg-[#252B42]">
      <UpperMenu />
      <PricingHeader />
      <PricingCards />
      <Sponsorship />
      <PricingDescription />
      <PricingCallAction />
      <Footer />
    </div>
  );
};

export default Pricing;
