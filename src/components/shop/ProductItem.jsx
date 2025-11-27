const ProductItem = ({ img }) => {
  return (
    <div className="relative ">
      <img src={img} className="object-contain" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div className="text-white font-montserrat flex flex-col items-center p-3 absolute top-[125px] left-[125px] lg:top-[100px] lg:left-[100px]">
        <h6 className="font-bold leading-6 tracking-[0.1px]">CLOTHS</h6>
        <p className="font-normal leading-5 tracking-[0.2px]">CLOTHS</p>
      </div>
    </div>
  );
};

export default ProductItem;
