import { useContext, useState, useEffect, useRef, createContext } from "react"
import { auth } from "../firebase/firebase_config"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth"

// Creates Context
const AuthContext = createContext()

// Helper function - saves a step instead of making 2 imports everytime
export const useAuth = () => {
  return useContext(AuthContext)
}

// Auth provider function
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const userInfo = useRef()
  const provider = new GithubAuthProvider()

  // Auth User with Github
  const authWithGithub = () => {
    return signInWithPopup(auth, provider)
  }
  // Registers User with Email and Password
  const registerUser = (userEmail, userPassword) => {
    return createUserWithEmailAndPassword(auth, userEmail, userPassword)
  }
  // Logs in User with Email and Password
  const loginUser = (userEmail, userPassword) => {
    return signInWithEmailAndPassword(auth, userEmail, userPassword)
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
    authWithGithub,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
