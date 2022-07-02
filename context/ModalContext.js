import { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export const useModal = () => {
  return useContext(ModalContext)
}

const ModalContextProvider = ({ children }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const value = {
    showRegisterModal,
    setShowRegisterModal,
    showLoginModal,
    setShowLoginModal,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export default ModalContextProvider
