import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute z-50 top-23 left-0  bg-white dark:bg-[#252b42] dark:text-[#fafafa]  w-full lg:hidden flex flex-col items-center justify-center gap-6 text-[#737373] font-montserrat font-bold text-2xl leading-11 tracking-[0.2px] py-8 cursor-pointer">
      <p onClick={() => navigate("/")}>Home</p>
      <p onClick={() => navigate("/shop")}>Shop</p>
      <p onClick={() => navigate("/about")}>About</p>
      <p onClick={() => navigate("/team")}>Team</p>
      <p onClick={() => navigate("/contact")}>Contact</p>
      <p onClick={() => navigate("/pricing")}>Pricing</p>
    </div>
  );
};

export default MenuBar;
