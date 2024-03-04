import React from "react";
import { Navigate } from "react-router-dom";

interface AuthInterface {
  element: JSX.Element;
}

const AuthRoute: React.FC<AuthInterface> = ({ element }) => {
  if (!!localStorage.getItem("auth-access")) return <>{element}</>;
  return <Navigate to={"/"} />;
};

export default AuthRoute;
