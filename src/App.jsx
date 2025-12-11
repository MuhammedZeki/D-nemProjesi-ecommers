import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ModelOpenProvider from "./context/ModelOpen";
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
import Order from "./pages/Order";
import { LangProvider } from "./context/LangContext";
import { CreateOrder } from "./pages/CreateOrder";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import AuthRedirectRoute from "./components/routes/AuthRedirectRoute";
import Success from "./pages/Success";

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
            <Route path="/successOrder" element={<Success />} />
            <Route
              path="/createOrder"
              element={
                <ProtectedRoute>
                  <CreateOrder />
                </ProtectedRoute>
              }
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/order" element={<Order />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
            <Route
              path="/signIn"
              element={
                <AuthRedirectRoute>
                  <SignIn />
                </AuthRedirectRoute>
              }
            />
            <Route
              path="/signUp"
              element={
                <AuthRedirectRoute>
                  <SignUp />
                </AuthRedirectRoute>
              }
            />
          </Routes>
        </LangProvider>
      </ModelOpenProvider>
    </>
  );
};

export default App;
