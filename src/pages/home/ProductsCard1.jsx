import ProductCardItem from "../../components/products/ProductCardItem";

const ProductsCard1 = () => {
  return (
    <div className="lg:w-[75%] lg:mx-auto lg:py-8 lg:px-4 flex flex-col gap-4 ">
      <div className="lg:flex lg:flex-row flex flex-col">
        <div className=" lg:w-2/3 w-full">
          <img src="/products/p1.jpg" className="object-contain w-full" />
        </div>
        <div className=" lg:w-1/3 bg-[#FAFAFA] flex flex-col gap-10 mt-5 lg:mt-0 lg:gap-2 items-center px-12 py-6 justify-center font-montserrat">
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
      </div>
      <div className="font-montserrat lg:flex lg:flex-row flex flex-col ">
        <ProductCardItem count="1" />
        <ProductCardItem count="2" />
        <ProductCardItem count="3" />
        <ProductCardItem count="4" />
      </div>
    </div>
  );
};

export default ProductsCard1;
