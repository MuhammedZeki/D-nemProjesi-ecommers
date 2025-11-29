const AboutHero = () => {
  return (
    <div className="flex items-center w-full px-10 lg:w-[75%] mx-auto py-8">
      <div className="w-full flex items-center ">
        <div className="">
          <div className="font-montserrat flex flex-col gap-8">
            <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42]">
              ABOUT COMPANY
            </h5>
            <h1 className="font-bold text-6xl leading-20 tracking-[0.2px] text-[#252B42]">
              ABOUT US
            </h1>
            <p className="font-medium text-xl leading-8 tracking-[0.2px] text-[#737373]">
              We know how large objects will act, but things on a small scale
            </p>
            <div>
              <button className="bg-[#23A6F0]  px-10 py-3.5 rounded-lg text-white font-bold leading-5 tracking-[0.2px]">
                Get Quote Now
              </button>
            </div>
          </div>
        </div>
        <div className=" relative">
          <img
            src="/about/img1.png"
            className="w-[801px] object-cover relative z-20"
            alt=""
          />
          <div className="bg-[#FFE9EA] w-[77px] h-[77px] rounded-full absolute top-5 left-25"></div>
          <div className="bg-[#FFE9EA] w-[30px] h-[30px] rounded-full absolute top-45 right-20"></div>
          <div className="bg-[#FFE9EA] w-[450px] h-[450px] rounded-full absolute top-3 right-35 z-10"></div>
          <div className="bg-[#977DF4] w-3.5 h-3.5 rounded-full absolute bottom-10 left-30"></div>
          <div className="bg-[#977DF4] w-3.5 h-3.5 rounded-full absolute top-25 right-30"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
