import { useNavigate } from "react-router-dom";

const ProductCardItem = ({ item, key }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/productDetails/${item?.id}`)}
      key={key}
      className="flex flex-col grow gap-2 items-center justify-center font-montserrat cursor-pointer"
    >
      <img
        src={item?.img}
        className="lg:w-[250px] h-[220px] w-full object-cover rounded-md"
      />
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

export default ProductCardItem;
