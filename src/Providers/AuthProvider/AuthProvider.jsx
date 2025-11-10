import React, { useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const userSignInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    updateProfileFunc,
    userLogin,
    userSignInWithGoogle,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
