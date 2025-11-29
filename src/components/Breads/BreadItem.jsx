import { useNavigate } from "react-router-dom";

const BreadItem = ({ img }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/productDetails")}
      className="flex cursor-pointer flex-col grow gap-2 p-2 items-center justify-center transform duration-500 hover:bg-[#FAFAFA]"
    >
      <img src={img} alt="" className="w-[190px]" />
      <div className="font-bold text-md leading-6 tracking-[0.1px] text-[#252B42]">
        Graphic Design
      </div>
      <div className="font-bold text-md leading-6 tracking-[0.2px] text-[#737373]">
        English Department
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#BDBDBD]">
          $16.48
        </span>
        <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#23856D]">
          $6.48
        </span>
      </div>
    </div>
  );
};

export default BreadItem;
