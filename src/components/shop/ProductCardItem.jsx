const ProductCardItem = ({ item, key }) => {
  return (
    <div
      key={key}
      className="flex flex-col grow gap-2 items-center justify-center font-montserrat"
    >
      <img
        src={item?.img}
        className="w-[190px] h-[190px] object-cover rounded-md "
      />
      <div className="font-bold text-md leading-6 tracking-[0.1px] text-[#252B42]">
        {item?.name}
      </div>
      <div className="font-bold text-md leading-6 tracking-[0.2px] text-[#737373]">
        {item?.deparment}
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#BDBDBD]">
          ${item?.oldPrice}
        </span>
        <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#23856D]">
          ${item?.newPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductCardItem;
