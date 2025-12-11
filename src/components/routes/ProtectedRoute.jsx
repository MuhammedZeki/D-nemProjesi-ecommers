import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("loggedInUser");
  const location = useLocation();
  if (!isLoggedIn) {
    toast.info("Giriş yapmalısınız!");
    return (
      <Navigate to="/signin" replace state={{ from: location.pathname }} />
    );
  }

  return children;
};

export default ProtectedRoute;
