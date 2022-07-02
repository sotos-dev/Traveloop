import { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export const useModal = () => {
  return useContext(ModalContext)
}

const ModalContextProvider = ({ children }) => {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)

  const value = {
    showAuthModal,
    setShowAuthModal,
    showRegistrationForm,
    setShowRegistrationForm,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export default ModalContextProvider
