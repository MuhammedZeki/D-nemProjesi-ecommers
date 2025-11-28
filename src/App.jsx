import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ModelOpenProvider from "./context/ModelOpen";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <ModelOpenProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ModelOpenProvider>
    </>
  );
};

export default App;
