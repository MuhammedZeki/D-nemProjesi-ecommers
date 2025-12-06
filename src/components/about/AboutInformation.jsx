const AboutInformation = () => {
  return (
    <div className="w-full my-20 px-10 lg:w-[75%] mx-auto py-8">
      <div className="font-montserrat lg:flex lg:flex-row flex flex-col lg:items-center gap-32 justify-center">
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-6xl leading-20 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
            15K
          </p>
          <p className="font-bold leading-6 tracking-[0.1px] text-[#737373] dark:text-[#fafafa]">
            Happy Customers
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-6xl leading-20 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
            150K
          </p>
          <p className="font-bold leading-6 tracking-[0.1px] text-[#737373] dark:text-[#fafafa]">
            Monthly Visitors
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-6xl leading-20 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
            15
          </p>
          <p className="font-bold leading-6 tracking-[0.1px] text-[#737373] dark:text-[#fafafa]">
            Countries Worldwide
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-6xl leading-20 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
            100+
          </p>
          <p className="font-bold leading-6 tracking-[0.1px] text-[#737373] dark:text-[#fafafa]">
            Top Partners
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInformation;
