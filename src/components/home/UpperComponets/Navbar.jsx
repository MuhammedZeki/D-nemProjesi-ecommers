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
      <div className="font-semibold text-[#252B42] flex items-center gap-1">
        <span onClick={() => navigate("/shop")}>Shop</span>
        <IoIosArrowDown
          className="w-5 h-5"
          onClick={() => setShopModal(!shopModal)}
        />
      </div>
      <div onClick={() => navigate("/about")}>About</div>
      <div onClick={() => navigate("/blog")}>Blog</div>
      <div onClick={() => navigate("/contact")}>Contact</div>
      <div onClick={() => navigate("/team")}>Team</div>
      <div onClick={() => navigate("/pricing")}>Pricing</div>
    </div>
  );
};

export default Navbar;
