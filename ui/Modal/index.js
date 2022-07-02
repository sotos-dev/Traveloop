import RegisterUser from "../../components/auth/registerUser"
import LoginUser from "../../components/auth/loginUser"
import { useModal } from "../../context/ModalContext"
import styles from "./index.module.scss"
import { useEffect, useRef } from "react"

const Modal = ({ children }) => {
  // Ref
  const registerCard = useRef()
  const loginCard = useRef()
  // Modal Hook
  const {
    showRegisterModal,
    showLoginModal,
    setShowRegisterModal,
    setShowLoginModal,
  } = useModal()

  // Click Outside - Close Modal
  const closeModal = (e) => {
    if (showRegisterModal) {
      if (!registerCard.current.contains(e.target)) {
        setShowRegisterModal(false)
      }
    }

    if (showLoginModal) {
      if (!registerCard.current.contains(e.target)) {
        setShowLoginModal(false)
      }
    }
  }

  return (
    <>
      {showRegisterModal && (
        <div onClick={closeModal} className={styles.modalWrapper}>
          <div ref={registerCard}>{showRegisterModal && <RegisterUser />}</div>
        </div>
      )}
      {showLoginModal && (
        <div onClick={closeModal} className={styles.modalWrapper}>
          <div ref={registerCard}>{showLoginModal && <LoginUser />}</div>
        </div>
      )}
    </>
  )
}

export default Modal
