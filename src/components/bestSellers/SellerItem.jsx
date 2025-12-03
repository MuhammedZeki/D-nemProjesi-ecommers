const SellerItem = ({ key, item }) => {
  return (
    <div key={key} className="flex flex-col grow gap-8 mx-6 lg:mx-0">
      <img src={item?.img} className="object-cover h-[280px]" />
      <div className="flex flex-col items-center lg:items-start gap-4 py-1 font-montserrat">
        <h5 className="font-bold text-md leading-6 tracking-[0.1px] text-[#252B42]">
          {item?.name}
        </h5>
        <p className="font-bold text-sm leading-6 tracking-[0.1px] text-[#737373]">
          {item?.department}
        </p>
        <div className="flex gap-2">
          <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#BDBDBD]">
            ${item?.oldPrice}
          </span>
          <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#23856D]">
            ${item?.newPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellerItem;
