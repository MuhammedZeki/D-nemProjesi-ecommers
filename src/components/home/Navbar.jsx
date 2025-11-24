import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="flex items-center font-montserrat font-bold text-md leading-7 tracking-[0.2px] text-[#737373] cursor-pointer gap-4">
      <div>Home</div>
      <div className="font-medium text-[#252B42] flex items-center gap-2">
        <span>Shop</span>
        <IoIosArrowDown />
      </div>
      <div>About</div>
      <div>Blog</div>
      <div>Contact</div>
      <div>Pages</div>
    </div>
  );
};

export default Navbar;
