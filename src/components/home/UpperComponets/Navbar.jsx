import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ModelOpenContext } from "../../../context/ModelOpen";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { setShopModal, shopModal } = useContext(ModelOpenContext);
  const navigate = useNavigate();
  return (
    <div className="hidden lg:flex lg:items-center font-montserrat font-bold text-md leading-7 tracking-[0.2px] text-[#737373] cursor-pointer gap-4">
      <div onClick={() => navigate("/")}>Home</div>
      <div className="font-medium text-[#252B42] flex items-center gap-2">
        <span onClick={() => navigate("/shop")}>Shop</span>
        <IoIosArrowDown onClick={() => setShopModal(!shopModal)} />
      </div>
      <div>About</div>
      <div>Blog</div>
      <div>Contact</div>
      <div>Pages</div>
    </div>
  );
};

export default Navbar;
