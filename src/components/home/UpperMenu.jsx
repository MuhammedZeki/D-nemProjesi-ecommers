import { Activity, useContext } from "react";
import { ModelOpenContext } from "../../context/ModelOpen";
import Logo from "./UpperComponets/Logo";
import Navbar from "./UpperComponets/Navbar";
import Cards from "./UpperComponets/Cards";
import MenuBar from "./UpperComponets/MenuBar";
import ShopCard from "./UpperComponets/ShopCard";
import FavoriteItems from "../favorites/FavoriteItems";
import BasketItems from "../basket/BasketItems";
const UpperMenu = () => {
  const { open, shopModal, basketModal, favModal } =
    useContext(ModelOpenContext);
  return (
    <div className="relative flex items-center justify-between gap-6 sm:gap-0  w-full px-10 lg:w-[75%] mx-auto py-8">
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
  );
};

export default UpperMenu;
