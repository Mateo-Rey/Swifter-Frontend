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
    navigate("/dashboard")
    
    return 0;
  }
  function logout() {
    auth.signOut()
    return navigate("/login")
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
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}