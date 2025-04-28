import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config';


const auth = getAuth(app)
export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null);
    const [loading ,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
       
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(email,password);
    }
    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authInfo={
     user,
     loading,
     createUser,
     signIn,
     logout
    }

    useEffect(()=>{
        const unscribe=auth.onAuthStateChanged((currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unscribe(); // Clean up the subscription on unmount
        };
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;