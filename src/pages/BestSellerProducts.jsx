import React from "react";

const BestSellerProducts = () => {
  return (
    <div className=" bg-[#FAFAFA]">
      <div className=" flex flex-col gap-4 w-[75%] mx-auto py-8 px-4  font-montserrat">
        <div className="py-3 border-b-2 border-[#ECECEC]">
          <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="py-2 flex gap-2">
          <div className="flex flex-col grow gap-8">
            <img
              src="/bestSeller/p1.png"
              alt=""
              className="object-cover h-[280px]"
            />
            <div className="flex flex-col gap-4 py-1 font-montserrat">
              <h5 className="font-bold text-md leading-6 tracking-[0.1px] text-[#252B42]">
                Graphic Design
              </h5>
              <p className="font-bold text-sm leading-6 tracking-[0.1px] text-[#737373]">
                English Department
              </p>
              <div className="flex gap-2">
                <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </span>
                <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#23856D]">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow gap-8">
            <img
              src="/bestSeller/p2.jpg"
              alt=""
              className="object-cover h-[280px]"
            />
            <div className="flex flex-col gap-4 py-1 font-montserrat">
              <h5 className="font-bold text-md leading-6 tracking-[0.1px] text-[#252B42]">
                Graphic Design
              </h5>
              <p className="font-bold text-sm leading-6 tracking-[0.1px] text-[#737373]">
                English Department
              </p>
              <div className="flex gap-2">
                <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </span>
                <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#23856D]">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow gap-8">
            <img
              src="/bestSeller/p3.jpg"
              alt=""
              className="object-cover h-[280px]"
            />
            <div className="flex flex-col gap-4 py-1 font-montserrat">
              <h5 className="font-bold text-md leading-6 tracking-[0.1px] text-[#252B42]">
                Graphic Design
              </h5>
              <p className="font-bold text-sm leading-6 tracking-[0.1px] text-[#737373]">
                English Department
              </p>
              <div className="flex gap-2">
                <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </span>
                <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#23856D]">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow gap-8">
            <img
              src="/bestSeller/p4.jpg"
              alt=""
              className="object-cover h-[280px]"
            />
            <div className="flex flex-col gap-4 py-1 font-montserrat">
              <h5 className="font-bold text-md leading-6 tracking-[0.1px] text-[#252B42]">
                Graphic Design
              </h5>
              <p className="font-bold text-sm leading-6 tracking-[0.1px] text-[#737373]">
                English Department
              </p>
              <div className="flex gap-2">
                <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </span>
                <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#23856D]">
                  $6.48
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerProducts;
