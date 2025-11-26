import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ModelOpenContext = createContext();

const ModelOpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const changeModal = () => {
    setOpen(!open);
  };
  return (
    <ModelOpenContext.Provider value={{ open, changeModal }}>
      {children}
    </ModelOpenContext.Provider>
  );
};

export default ModelOpenProvider;
