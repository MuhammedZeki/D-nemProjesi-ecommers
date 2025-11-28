const DetailSellerItem = ({ img }) => {
  return (
    <div className="flex flex-col">
      <img src={img} className="object-cover w-[290px]" />
      <div className="flex flex-col gap-5 px-6 py-8 bg-white">
        <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42]">
          Graphic Design
        </h5>
        <p className="font-bold leading-6 text-sm tracking-[0.2px] text-[#737373]">
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
  );
};

export default DetailSellerItem;
