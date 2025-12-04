import { useNavigate } from "react-router-dom";

const SellerItem = ({ key, item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/productDetails/${item?.id}`)}
      key={key}
      className="flex flex-col grow gap-4 mx-6 lg:mx-0 cursor-pointer"
    >
      <img
        src={item?.img}
        className="object-cover w-[300px] h-[250px] rounded-sm"
      />
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
