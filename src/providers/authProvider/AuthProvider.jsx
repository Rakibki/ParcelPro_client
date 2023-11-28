import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { createToken, createUserDB } from "../../api/auth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export const authContext = createContext(null);

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadding, setLoadding] = useState(true);
  const axiosSecure = useAxiosSecure();

  const createUser = (email, password) => {
    setLoadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singUser = (email, password) => {
    setLoadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoadding(true);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoadding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubProvider = new GithubAuthProvider();
  const loginWithGithub = () => {
    setLoadding(true);
    return signInWithPopup(auth, githubProvider);
  };

  const updaetUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  useEffect(() => {
    const disConnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadding(false);
      const logginUser = user?.email || currentUser?.email;

      const LoginUser = {
        email: user?.email || currentUser?.email,
        name: user?.displayName || currentUser?.displayName,
        role: "user",
        image: user?.photoURL || currentUser?.photoURL
      }


      if (currentUser?.photoURL && user) {
        createToken({ logginUser });
        createUserDB(LoginUser);
      } else {
        axiosSecure.post("/jwt");
      }

      return () => {
        disConnect();
      };
    });
  }, [user]);


  const userInfo = {
    user,
    loadding,
    createUser,
    singUser,
    logOut,
    loginWithGoogle,
    loginWithGithub,
    updaetUserProfile,
  };

  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvaider;
