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
  // Context
  const { setShowLoginModal, setShowRegisterModal } = useModal()

  const logUserOut = () => {
    logout()
    router.push("/")
  }

  return (
    <>
      {!currentUser && (
        <div className={styles.authArea}>
          <p
            onClick={() => setShowLoginModal((prev) => (prev = !prev))}
            className={styles.loginLink}>
            Login
          </p>
          <p
            onClick={() => setShowRegisterModal((prev) => (prev = !prev))}
            className={styles.registerLink}>
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
