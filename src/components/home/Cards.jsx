import { CiUser, CiSearch, CiShoppingBasket, CiHeart } from "react-icons/ci";
const Cards = () => {
  return (
    <div className="font-montserrat font-bold text-md leading-6 tracking-[0.2px] text-[#23A6F0] flex items-center gap-4 cursor-pointer">
      <div className="flex items-center gap-1">
        <CiUser className="w-6 h-6" />
        <span>Login/Register</span>
      </div>
      <div>
        <CiSearch className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-2">
        <CiShoppingBasket className="w-6 h-6" />
        <span className="font-normal">1</span>
      </div>
      <div className="flex items-center gap-2">
        <CiHeart className="w-6 h-6" />
        <span className="font-normal">1</span>
      </div>
    </div>
  );
};

export default Cards;
