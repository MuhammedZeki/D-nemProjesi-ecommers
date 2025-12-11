import { Navigate } from "react-router-dom";

const AuthRedirectRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("loggedInUser");

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthRedirectRoute;
