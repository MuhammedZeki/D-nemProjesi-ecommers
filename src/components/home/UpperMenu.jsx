import React from "react";
import Logo from "./UpperComponets/Logo";
import Navbar from "./UpperComponets/Navbar";
import Cards from "./UpperComponets/Cards";

const UpperMenu = () => {
  return (
    <div className="flex items-center justify-between  w-[75%] mx-auto py-8">
      <Logo />
      <Navbar />
      <Cards />
    </div>
  );
};

export default UpperMenu;
