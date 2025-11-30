import UpperMenu from "../components/home/UpperMenu";
import PricingCards from "../components/pricing/PricingCards";
import PricingHeader from "../components/pricing/PricingHeader";
import Sponsorship from "./home/Sponsorship";
import PricingDescription from "./../components/pricing/PricingDescription";
import PricingCallAction from "../components/pricing/PricingCallAction";

const Pricing = () => {
  return (
    <div>
      <UpperMenu />
      <PricingHeader />
      <PricingCards />
      <Sponsorship />
      <PricingDescription />
      <PricingCallAction />
    </div>
  );
};

export default Pricing;
