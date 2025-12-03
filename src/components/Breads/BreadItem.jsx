import { useNavigate } from "react-router-dom";

const BreadItem = ({ item, key }) => {
  const navigate = useNavigate();
  return (
    <div
      key={key}
      onClick={() => navigate("/productDetails")}
      className="flex cursor-pointer flex-col grow gap-2 p-2 items-center justify-center transform duration-500 hover:bg-[#FAFAFA] lg:w-[293px]"
    >
      <img src={item?.img} alt="" className="w-[190px]" />
      <div className="font-bold text-md leading-6 tracking-[0.1px] text-[#252B42]">
        {item?.name}
      </div>
      <div className="font-bold text-md leading-6 tracking-[0.2px] text-[#737373]">
        {item?.department}
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

export default BreadItem;
