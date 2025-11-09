import React from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "Imtiazul Hoque",
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
