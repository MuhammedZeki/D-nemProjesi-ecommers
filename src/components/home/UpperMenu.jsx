import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Cards from "./Cards";

const UpperMenu = () => {
  return (
    <div className="flex items-center justify-between border border-black w-[75%] mx-auto py-8">
      <Logo />
      <Navbar />
      <Cards />
    </div>
  );
};

export default UpperMenu;
