import CardContents from "./CardContents";
import CardHeader from "./CardHeader";

const PricingCards = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col items-center justify-center w-full px-10 lg:w-[75%] my-8 mx-auto gap-6 py-16">
        <CardHeader />
        <CardContents />
      </div>
    </div>
  );
};

export default PricingCards;
