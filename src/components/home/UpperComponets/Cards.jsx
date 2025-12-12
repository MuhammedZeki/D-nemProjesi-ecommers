import { CiUser, CiSearch, CiShoppingBasket, CiHeart } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { ModelOpenContext } from "../../../context/ModelOpen";
import { MdExitToApp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { MdLightMode } from "react-icons/md";
import { CiLight, CiDark } from "react-icons/ci";
import { useLang } from "../../../context/LangContext";
import { FaMoon } from "react-icons/fa6";
const Cards = () => {
  const { changeModal, setBasketModal, setFavModal } =
    useContext(ModelOpenContext);
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedInUser");
  const { items } = useSelector((state) => state.basket);
  const { favorites } = useSelector((state) => state.favorite);

  const [theme, setTheme] = useState("light");
  const { lang, setLang } = useLang();
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(saved);
      if (saved === "dark") document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    toast.success("Çıkış başarıyla gerçekleşti!");
    navigate("/signIn");
    window.location.reload();
  };
  return (
    <>
      <div className="font-montserrat hidden font-bold text-md leading-6 tracking-[0.2px] text-[#23A6F0] dark:text-[#FAFAFA] xl:flex xl:items-center xl:gap-4 cursor-pointer">
        <div className="flex items-center gap-1">
          {!user && (
            <>
              <CiUser className="w-6 h-6" />
              <span onClick={() => navigate("/signIn")}>
                {lang === "en" ? "Login" : "Giriş yap"}
              </span>
              <span>/</span>
              <span onClick={() => navigate("/signUp")}>
                {lang === "en" ? "Register" : "Kayıt ol"}
              </span>
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
        <div
          onClick={() => setFavModal((p) => !p)}
          className="flex items-center gap-2 relative group"
        >
          <CiHeart className="w-6 h-6 group-hover:text-[#CB0404] transition duration-300" />
          <span className="font-light absolute bg-[#23A6F0] text-[#FAFAFA] transition duration-300 group-hover:bg-[#CB0404] rounded-full flex items-center justify-center p-1 w-4 h-4 text-xs -top-1 -right-2">
            {favorites.length}
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
        <button
          onClick={toggle}
          className="p-2 rounded cursor-pointer bg-gray-200 dark:bg-gray-700"
        >
          {theme === "light" ? (
            <FaMoon className="w-5 h-5" />
          ) : (
            <MdLightMode className="w-5 h-5 text-[#fafafa]" />
          )}
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded cursor-pointer ${
              lang === "en" ? "bg-blue-500 text-white" : "border"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("tr")}
            className={`px-3 py-1 rounded cursor-pointer ${
              lang === "tr" ? "bg-blue-500 text-white" : "border"
            }`}
          >
            TR
          </button>
        </div>
      </div>
      <div className="font-montserrat font-bold text-md leading-6 tracking-[0.2px] text-[#252B42] dark:text-[#FAFAFA] flex  items-center gap-4 cursor-pointer xl:hidden">
        <div>
          <CiSearch className="w-6 h-6" />
        </div>
        <div
          onClick={() => setBasketModal((p) => !p)}
          className="flex items-center relative group"
        >
          <CiShoppingBasket className="w-6 h-6 group-hover:text-[#585d72] transition duration-300" />
          <span className="font-light absolute bg-[#252B42] dark:bg-[#FAFAFA] dark:text-[#252b42] group-hover:bg-[#585d72] text-[#FAFAFA] transition duration-300 rounded-full flex items-center justify-center p-1 w-4 h-4 text-xs -top-1 -right-1">
            {items.length}
          </span>
        </div>
        <div
          onClick={() => setFavModal((p) => !p)}
          className="flex items-center gap-2 relative group"
        >
          <CiHeart className="w-6 h-6 group-hover:text-[#CB0404] transition duration-300" />
          <span className="font-light absolute bg-[#23A6F0] dark:bg-[#fafafa] dark:text-[#252b42] text-[#FAFAFA] transition duration-300 group-hover:bg-[#CB0404] rounded-full flex items-center justify-center p-1 w-4 h-4 text-xs -top-1 -right-2">
            {favorites.length}
          </span>
        </div>
        <div className="sm:items-center gap-1 hidden sm:flex sm:flex-row">
          {user && (
            <>
              <span className="text-sm">{user.toUpperCase()}</span>
              <MdExitToApp onClick={handleLogout} className="w-6 h-6" />
            </>
          )}
        </div>
        <button
          onClick={toggle}
          className="p-2 rounded cursor-pointer bg-gray-200 dark:bg-gray-700"
        >
          {theme === "light" ? (
            <CiDark className="w-5 h-5" />
          ) : (
            <CiLight className="w-5 h-5 text-yellow-600" />
          )}
        </button>
        <div className="sm:flex sm:flex-row hidden gap-2">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded cursor-pointer ${
              lang === "en" ? "bg-blue-500 text-white" : "border"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("tr")}
            className={`px-3 py-1 rounded cursor-pointer ${
              lang === "tr" ? "bg-blue-500 text-white" : "border"
            }`}
          >
            TR
          </button>
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
