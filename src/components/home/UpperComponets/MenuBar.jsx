import React from "react";

const MenuBar = () => {
  return (
    <div className="absolute z-10 top-23 left-0  bg-white  w-full lg:hidden flex flex-col items-center justify-center gap-6 text-[#737373] font-montserrat font-normal text-3xl leading-11 tracking-[0.2px] py-12">
      <p>Home</p>
      <p>Product</p>
      <p>Pricing</p>
      <p>Contact</p>
    </div>
  );
};

export default MenuBar;
