import Logo from "./UpperComponets/Logo";
import Navbar from "./UpperComponets/Navbar";
import Cards from "./UpperComponets/Cards";
import MenuBar from "./UpperComponets/MenuBar";
import { useContext } from "react";
import { ModelOpenContext } from "../../context/ModelOpen";

const UpperMenu = () => {
  const { open } = useContext(ModelOpenContext);
  console.log(open);
  return (
    <div className="relative flex items-center justify-between w-full px-10 lg:w-[75%] mx-auto py-8">
      <Logo />
      <Navbar />
      <Cards />
      {open && <MenuBar />}
    </div>
  );
};

export default UpperMenu;
