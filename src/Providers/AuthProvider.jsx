import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebaseConfig";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password); // Added 'auth' as the first parameter
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile =(name,photo)=>{
  return  updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
  }
  const googleProvider= new GoogleAuthProvider();
  const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logout,
    updateUserProfile,
    googleSignIn
  };

  useEffect(() => {
    const unscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unscribe(); // Clean up the subscription on unmount
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
