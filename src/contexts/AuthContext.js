import { createContext, useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom"
const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }
  async function googleLogin() {
    const provider = new GoogleAuthProvider();
    const results = await signInWithPopup(auth, provider)
    setCurrentUser(results)
    setIsLoggedIn(true)
    navigate("/dashboard")
    
    return 0;
  }
  function logout() {
    auth.signOut()
    setIsLoggedIn(false)
    return navigate("/dashboard")
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }
  
  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
  function handleLogout() {
    setIsLoggedIn(false)
  }
  function handleLogin() {
    setIsLoggedIn(true)
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    googleLogin,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    handleLogin,
    handleLogout,
    isLoggedIn
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}