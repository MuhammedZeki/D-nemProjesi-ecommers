import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <h3
      onClick={() => navigate("/")}
      className="font-montserrat cursor-pointer font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]"
    >
      Bandage
    </h3>
  );
};

export default Logo;
