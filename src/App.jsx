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
import Blog from "./pages/Blog";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </ModelOpenProvider>
    </>
  );
};

export default App;
