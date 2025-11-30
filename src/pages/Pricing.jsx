import UpperMenu from "../components/home/UpperMenu";
import PricingCards from "../components/pricing/PricingCards";
import PricingHeader from "../components/pricing/PricingHeader";
import Sponsorship from "./home/Sponsorship";
import PricingDescription from "./../components/pricing/PricingDescription";

const Pricing = () => {
  return (
    <div>
      <UpperMenu />
      <PricingHeader />
      <PricingCards />
      <Sponsorship />
      <PricingDescription />
    </div>
  );
};

export default Pricing;
