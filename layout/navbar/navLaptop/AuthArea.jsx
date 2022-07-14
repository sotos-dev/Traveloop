import Link from "next/link"
import styles from "./authArea.module.scss"
import { useAuth } from "../../../context/AuthContext"
import { useRouter } from "next/router"
import { useModal } from "../../../context/ModalContext"

const AuthArea = () => {
  // Auth
  const { currentUser, logout } = useAuth()
  // Router
  const router = useRouter()
  // Modal Context
  const { setShowAuthModal, setShowRegistrationForm } = useModal()

  const showRegisterModal = () => {
    setShowAuthModal((prev) => (prev = !prev))
    setShowRegistrationForm(true)
  }

  const showLoginModal = () => {
    setShowAuthModal((prev) => (prev = !prev))
    setShowRegistrationForm(false)
  }

  const logUserOut = () => {
    logout()
    router.push("/")
  }

  return (
    <>
      {!currentUser && (
        <div className={styles.authArea}>
          <button onClick={showLoginModal} className={styles.loginLink}>
            Login
          </button>
          <button onClick={showRegisterModal} className={styles.registerLink}>
            Register
          </button>
        </div>
      )}
      {currentUser && (
        <>
          <div className={styles.authArea}>
            <button onClick={logUserOut} className={styles.registerLink}>
              Logout
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default AuthArea
