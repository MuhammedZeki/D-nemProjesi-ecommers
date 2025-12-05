import { CiUser, CiSearch, CiShoppingBasket, CiHeart } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { useContext } from "react";
import { ModelOpenContext } from "../../../context/ModelOpen";
import { MdExitToApp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const Cards = () => {
  const { changeModal, setBasketModal } = useContext(ModelOpenContext);
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedInUser");
  const { items } = useSelector((state) => state.basket);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    toast.success("Çıkış başarıyla gerçekleşti!");
    navigate("/signIn");
    window.location.reload();
  };
  return (
    <>
      <div className="font-montserrat hidden font-bold text-md leading-6 tracking-[0.2px] text-[#23A6F0] lg:flex lg:items-center lg:gap-4 cursor-pointer">
        <div className="flex items-center gap-1">
          {!user && (
            <>
              <CiUser className="w-6 h-6" />
              <span onClick={() => navigate("/signIn")}>Login</span>
              <span>/</span>
              <span onClick={() => navigate("/signUp")}>Register</span>
            </>
          )}
        </div>
        <div>
          <CiSearch className="w-6 h-6" />
        </div>
        <div
          onClick={() => setBasketModal((p) => !p)}
          className="flex items-center gap-2 relative group"
        >
          <CiShoppingBasket className="w-6 h-6 group-hover:text-[#036aa5] transition duration-300" />
          <span className="font-light absolute bg-[#23A6F0] text-[#FAFAFA] transition duration-300 group-hover:bg-[#036aa5] rounded-full flex items-center justify-center p-1 w-4 h-4 text-xs -top-1 -right-1">
            {items.length}
          </span>
        </div>
        <div className="flex items-center gap-2 relative group">
          <CiHeart className="w-6 h-6 group-hover:text-[#CB0404] transition duration-300" />
          <span className="font-light absolute bg-[#23A6F0] text-[#FAFAFA] transition duration-300 group-hover:bg-[#CB0404] rounded-full flex items-center justify-center p-1 w-4 h-4 text-xs -top-1 -right-2">
            1
          </span>
        </div>
        <div className="flex items-center gap-1">
          {user && (
            <>
              <span className="text-sm">{user.toUpperCase()}</span>
              <MdExitToApp onClick={handleLogout} className="w-6 h-6" />
            </>
          )}
        </div>
      </div>
      <div className="font-montserrat font-bold text-md leading-6 tracking-[0.2px] text-[#252B42] flex items-center gap-4 cursor-pointer lg:hidden">
        <div className="flex items-center gap-1">
          {user ? (
            <MdExitToApp className="w-6 h-6 hover:text-[#585d72] transition duration-300" />
          ) : (
            <CiUser className="w-6 h-6" />
          )}
        </div>
        <div>
          <CiSearch className="w-6 h-6" />
        </div>
        <div
          onClick={() => setBasketModal((p) => !p)}
          className="flex items-center relative group"
        >
          <CiShoppingBasket className="w-6 h-6 group-hover:text-[#585d72] transition duration-300" />
          <span className="font-light absolute bg-[#252B42] group-hover:bg-[#585d72] text-[#FAFAFA] transition duration-300 rounded-full flex items-center justify-center p-1 w-4 h-4 text-xs -top-1 -right-1">
            {items.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <BiMenuAltRight
            onClick={() => changeModal()}
            className="w-6 h-6 hover:text-[#585d72] transition duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
