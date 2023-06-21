'use client'

import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUseruser, {
        displayName: firstName,
      });
      const user = userCredential.user;
      sessionStorage.setItem("Auth Token", user.stsTokenManager.refreshToken);
      setCurrentUser(user);
      await setDoc(doc(db, "users", user.uid), {
        email,
        firstName,
      });
      return true;
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setCurrentUser(user);
      sessionStorage.setItem("Auth Token", user.stsTokenManager.refreshToken);
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("Auth Token");
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        password,
        setPassword,
        error,
        setError,
        message,
        setMessage,
        signUp,
        login,
        resetPassword,
        logOut,
      }}
    >
      {children}
    </ AuthContext.Provider>
  );
};
