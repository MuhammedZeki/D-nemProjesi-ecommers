import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ModelOpenContext } from "../../../context/ModelOpen";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../../context/LangContext";

const Navbar = () => {
  const { setShopModal, shopModal } = useContext(ModelOpenContext);
  const { lang } = useLang();
  const navigate = useNavigate();

  const texts = {
    en: {
      home: "Home",
      shop: "Shop",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      team: "Team",
      pricing: "Pricing",
    },
    tr: {
      home: "Ana Sayfa",
      shop: "Mağaza",
      about: "Hakkımızda",
      blog: "Blog",
      contact: "İletişim",
      team: "Ekip",
      pricing: "Fiyatlandırma",
    },
  };

  const t = texts[lang];

  return (
    <div className="hidden xl:flex xl:items-center font-montserrat font-bold text-md leading-7 tracking-[0.2px] text-[#737373] dark:text-[#FAFAFA] cursor-pointer gap-4">
      <div onClick={() => navigate("/")}>{t.home}</div>

      <div className="font-semibold text-[#252B42] dark:text-[#d1d1d1] flex items-center gap-1">
        <span onClick={() => navigate("/shop")}>{t.shop}</span>
        <IoIosArrowDown
          className="w-5 h-5"
          onClick={() => setShopModal(!shopModal)}
        />
      </div>

      <div onClick={() => navigate("/about")}>{t.about}</div>
      <div onClick={() => navigate("/blog")}>{t.blog}</div>
      <div onClick={() => navigate("/contact")}>{t.contact}</div>
      <div onClick={() => navigate("/team")}>{t.team}</div>
      <div onClick={() => navigate("/pricing")}>{t.pricing}</div>
    </div>
  );
};

export default Navbar;
