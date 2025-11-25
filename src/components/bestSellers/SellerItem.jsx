const SellerItem = ({ img }) => {
  return (
    <div className="flex flex-col grow gap-8">
      <img src={`/bestSeller/${img}`} className="object-cover h-[280px]" />
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
  );
};

export default SellerItem;
