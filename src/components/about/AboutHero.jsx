const AboutHero = () => {
  return (
    <div className="flex items-center w-full px-10 lg:w-[75%] mx-auto py-8 dark:bg-[#252B42]">
      <div className="w-full lg:flex lg:flex-row lg:items-center flex flex-col gap-10 lg:gap-0">
        <div className="font-montserrat flex flex-col items-center lg:items-start gap-8">
          <h5 className="font-bold  leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
            ABOUT COMPANY
          </h5>
          <h1 className="font-bold text-center lg:text-start text-6xl leading-20 tracking-[0.2px] dark:text-[#fafafa] text-[#252B42]">
            ABOUT US
          </h1>
          <p className="font-medium text-xl leading-8 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
            We know how large objects will act, but things on a small scale
          </p>
          <div>
            <button className="bg-[#23A6F0]  px-10 py-3.5 rounded-lg text-white font-bold leading-5 tracking-[0.2px]">
              Get Quote Now
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/about/img1.png"
            className="lg:w-[801px] h-[500px] w-full object-cover relative z-20"
            alt=""
          />
          <div className="bg-[#FFE9EA] lg:w-[77px] lg:h-[77px] rounded-full absolute lg:top-5 lg:left-25"></div>
          <div className="bg-[#FFE9EA] lg:w-[30px] lg:h-[30px] rounded-full absolute lg:top-45 lg:right-25"></div>
          <div className="bg-[#FFE9EA] lg:w-[450px] lg:h-[450px] h-[300px] w-[300px] rounded-full absolute lg:top-3 lg:right-35 top-3 right-1 z-10"></div>
          <div className="bg-[#977DF4] w-3.5 h-3.5 rounded-full absolute lg:bottom-10 lg:left-30 left-3 bottom-0"></div>
          <div className="bg-[#977DF4] w-3.5 h-3.5 rounded-full absolute lg:top-25 lg:right-30 top-5 right-10"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
