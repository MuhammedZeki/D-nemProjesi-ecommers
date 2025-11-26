import { useContext } from "react";
import { ModelOpenContext } from "../../context/ModelOpen";
import Logo from "./UpperComponets/Logo";
import Navbar from "./UpperComponets/Navbar";
import Cards from "./UpperComponets/Cards";
import MenuBar from "./UpperComponets/MenuBar";
import ShopCard from "./UpperComponets/ShopCard";

const UpperMenu = () => {
  const { open, shopModal } = useContext(ModelOpenContext);
  return (
    <div className="relative flex items-center justify-between w-full px-10 lg:w-[75%] mx-auto py-8">
      <Logo />
      <Navbar />
      <Cards />
      {open && <MenuBar />}
      {shopModal && <ShopCard />}
    </div>
  );
};

export default UpperMenu;
