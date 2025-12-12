import { Activity, useContext } from "react";
import { ModelOpenContext } from "../../context/ModelOpen";
import Logo from "./UpperComponets/Logo";
import Navbar from "./UpperComponets/Navbar";
import Cards from "./UpperComponets/Cards";
import MenuBar from "./UpperComponets/MenuBar";
import ShopCard from "./UpperComponets/ShopCard";
import FavoriteItems from "../favorites/FavoriteItems";
import BasketItems from "../basket/BasketItems";
import TopMenu from "./TopMenu";
const UpperMenu = () => {
  const { open, shopModal, basketModal, favModal } =
    useContext(ModelOpenContext);
  return (
    <div className="flex flex-col  w-full  lg:w-[75%] mx-auto  ">
      <div className="p-4 sm:hidden">
        <TopMenu />
      </div>
      <div className="relative flex items-center justify-between gap-6 sm:gap-0 p-4">
        <Logo />
        <Navbar />
        <Cards />
        <Activity mode={open ? "visible" : "hidden"}>
          <MenuBar />
        </Activity>
        <Activity mode={shopModal ? "visible" : "hidden"}>
          <ShopCard />
        </Activity>
        <Activity mode={basketModal ? "visible" : "hidden"}>
          <BasketItems />
        </Activity>
        <Activity mode={favModal ? "visible" : "hidden"}>
          <FavoriteItems />
        </Activity>
      </div>
    </div>
  );
};

export default UpperMenu;
