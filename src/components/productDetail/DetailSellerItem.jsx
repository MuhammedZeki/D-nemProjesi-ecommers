import { useNavigate } from "react-router-dom";

const DetailSellerItem = ({ key, item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/productDetails/${item?.id}`)}
      key={key}
      className="flex flex-col cursor-pointer"
    >
      <img
        src={item?.img}
        className="lg:w-[250px] h-[220px] w-full object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="flex flex-col gap-5 px-6 py-8 bg-white lg:w-[250px]">
        <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42]">
          {item?.name}
        </h5>
        <p className="font-bold leading-6 text-sm tracking-[0.2px] text-[#737373]">
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

export default DetailSellerItem;
