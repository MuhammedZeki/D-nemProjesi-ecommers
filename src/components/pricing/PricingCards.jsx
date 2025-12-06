import CardContents from "./CardContents";
import CardHeader from "./CardHeader";

const PricingCards = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#3d445f]">
      <div className="flex flex-col items-center justify-center w-full px-10 lg:w-[75%] mt-8 mx-auto gap-6 pt-16">
        <CardHeader />
        <CardContents />
      </div>
    </div>
  );
};

export default PricingCards;
