import { useContext, useState, useEffect, useRef, createContext } from "react"
import { auth, db } from "../firebase/firebase_config"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"

// Creates Context
const AuthContext = createContext()

// Helper function - saves a step instead of making 2 imports everytime
export const useAuth = () => {
  return useContext(AuthContext)
}

// Auth provider
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const userInfo = useRef()

  // Registers User
  const registerUser = (userEmail, userPassword) => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    return
  }
  // Logins User
  const loginUser = (userEmail, userPassword) => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
    console.log("i ran")
  }
  // Logs Out User
  const logout = () => {
    return signOut(auth)
  }

  // Persists Logged User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const value = {
    currentUser,
    registerUser,
    loginUser,
    logout,
    userInfo,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
