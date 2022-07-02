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
          <p onClick={showLoginModal} className={styles.loginLink}>
            Login
          </p>
          <p onClick={showRegisterModal} className={styles.registerLink}>
            Register
          </p>
        </div>
      )}
      {currentUser && (
        <>
          <button onClick={logUserOut} className={styles.registerLink}>
            Logout
          </button>
          <Link href='/dashboard' passHref>
            <a className={styles.loginLink}>Dashboard</a>
          </Link>
        </>
      )}
    </>
  )
}

export default AuthArea
