import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ModelOpenProvider from "./context/ModelOpen";
import ProductDetails from "./pages/ProductDetails";
import ProductDetails1 from "./pages/ProductDetails1";
import Contact1 from "./pages/Contact1";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import { LangProvider } from "./context/LangContext";

const App = () => {
  return (
    <>
      <ModelOpenProvider>
        <LangProvider>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/productDetails/:id" element={<ProductDetails1 />} />
            <Route path="/contact1" element={<Contact1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </LangProvider>
      </ModelOpenProvider>
    </>
  );
};

export default App;
