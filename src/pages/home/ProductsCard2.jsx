import { BsDownload } from "react-icons/bs";
const ProductsCard2 = () => {
  return (
    <div className="lg:w-[75%] lg:mx-auto lg:py-8 lg:px-4 flex flex-col gap-4 ">
      <div className="lg:flex lg:flex-row flex flex-col-reverse">
        <div className=" lg:w-1/3 w-full bg-[#FAFAFA] flex flex-col gap-2 items-center px-12 py-6 justify-center font-montserrat">
          <div className="flex flex-col gap-2 items-center text-center">
            <h5 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
              MOST POPULAR
            </h5>
            <p className="font-normal text-md leading-5  tracking-[0.2px] text-[#737373]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </div>
          <div className="py-1">
            <img src="/products/et-1.jpg" className="object-contain w-full" />
          </div>
          <div className="flex flex-col gap-6 items-center text-center">
            <p className="font-bold text-md leading-6 tracking-[0.2px] text-[#252B42]">
              English Department
            </p>
            <p className="font-bold text-md leading-6 tracking-[0.2px] text-[#737373] flex items-center gap-2">
              <BsDownload className="w-5 h-5" />
              <p>15 Sales</p>
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#BDBDBD]">
                $16.48
              </span>
              <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#23856D]">
                $6.48
              </span>
            </div>
            <p className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
              <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
            </p>
          </div>
        </div>
        <div className=" lg:w-2/3 w-full">
          <img
            src="/products/yemek.jpg"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard2;
