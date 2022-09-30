import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase"
import {GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState()
  const [loading, setLoading] = useState(true)
  const provider = new GoogleAuthProvider();
  const handleLogin = async () => {
  const user = await signInWithPopup(auth, provider).catch((err) => console.log(err))
  if (user) setIsLoggedIn(true);
  }

  const handleSignOut = async () => {
    signOut(auth).then(setIsLoggedIn(false))
  }

  const value = {
    handleLogin,
    handleSignOut,
    isLoggedIn,
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}