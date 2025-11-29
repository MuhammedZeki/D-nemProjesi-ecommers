const ShopCards = () => {
  return (
    <div className=" flex gap-4 w-[75%] my-2 mx-auto py-8 px-4  justify-center ">
      <div className=" relative">
        <img src="/shop/img1.png" className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 bg-[#2D8BC0BF] py-16 px-12">
          <div className="font-montserrat flex flex-col items-start gap-4">
            <h6 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#FFFFFF] ">
              Top Product Of the Week
            </h6>
            <button className="border border-white rounded-lg py-5 px-3 text-white font-bold text-md leading-5 tracking-[0.2px]">
              {" "}
              EXPLORE ITEMS
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2">
        <div className="relative">
          <img
            src="/shop/img2.png"
            className="object-cover w-[557px] h-[279px]"
          />
          <div className="absolute bottom-0 left-0 bg-[#2D8BC0BF] py-6 px-8">
            <div className="font-montserrat flex flex-col items-start gap-4">
              <h6 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#FFFFFF] ">
                Top Product Of the Week
              </h6>
              <button className="border border-white rounded-lg py-5 px-3 text-white font-bold text-md leading-5 tracking-[0.2px]">
                {" "}
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/shop/img3.png"
            className="object-cover w-[557px] h-[279px]"
          />
          <div className="absolute bottom-0 left-0 bg-[#2D8BC0BF] py-6 px-8">
            <div className="font-montserrat flex flex-col items-start gap-4">
              <h6 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#FFFFFF] ">
                Top Product Of the Week
              </h6>
              <button className="border border-white rounded-lg py-5 px-3 text-white font-bold text-md leading-5 tracking-[0.2px]">
                {" "}
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
