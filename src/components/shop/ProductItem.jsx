const ProductItem = ({ item, key }) => {
  return (
    <div key={key} className="relative ">
      <img src={item?.img} className="object-contain w-[350px] " />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div
        className="text-[#FAFAFA] font-montserrat flex flex-col items-center p-3 absolute top-[50%] left-[50%]
      -translate-y-1/2 -translate-x-1/2"
      >
        <h6 className="font-bold leading-6 tracking-[0.1px]">{item?.name}</h6>
        <p className="font-normal leading-5 tracking-[0.2px]">{item?.name}</p>
      </div>
    </div>
  );
};

export default ProductItem;
