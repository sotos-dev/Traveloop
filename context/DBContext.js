import { createContext, useContext } from "react"
import { db } from "../firebase/firebase_config"
import { collection, getDocs } from "firebase/firestore"

const DBContext = createContext()

export const useDB = () => {
  useContext(DBContext)
}

const DBContextProvider = ({ children }) => {
  const posts = []

  const getDestinationPosts = async () => {
    return await getDocs(collection(db, "destinations"))
  }

  await

  //   const value = { getDestinationPosts }

  return (
    <DBContext.Provider value={{ getDestinationPosts }}>
      {children}
    </DBContext.Provider>
  )
}

export default DBContextProvider
