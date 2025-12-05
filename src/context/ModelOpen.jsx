import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ModelOpenContext = createContext();

const ModelOpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [shopModal, setShopModal] = useState(false);
  const [basketModal, setBasketModal] = useState(false);
  const [favModal, setFavModal] = useState(false);
  const changeModal = () => {
    setOpen(!open);
  };
  const value = {
    open,
    changeModal,
    shopModal,
    setShopModal,
    basketModal,
    setBasketModal,
    favModal,
    setFavModal,
  };
  return (
    <ModelOpenContext.Provider value={value}>
      {children}
    </ModelOpenContext.Provider>
  );
};

export default ModelOpenProvider;
