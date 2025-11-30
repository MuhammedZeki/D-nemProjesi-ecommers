import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ModelOpenProvider from "./context/ModelOpen";
import ProductDetails from "./pages/ProductDetails";
import Contact1 from "./pages/Contact1";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <>
      <ModelOpenProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/contact1" element={<Contact1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </ModelOpenProvider>
    </>
  );
};

export default App;
