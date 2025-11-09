import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { DotLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-30">
        <DotLoader />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/auth-login"></Navigate>;
};

export default PrivateRoutes;
