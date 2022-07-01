import Link from "next/link"
import styles from "./authArea.module.scss"
import { useAuth } from "../../../context/AuthContext"
import { useRouter } from "next/router"

const AuthArea = () => {
  const { currentUser, logout } = useAuth()
  const router = useRouter()

  const logUserOut = () => {
    logout()
    router.push("/")
  }

  return (
    <>
      {!currentUser && (
        <div className={styles.authArea}>
          <Link href='/login' passHref>
            <a className={styles.loginLink}>Login</a>
          </Link>
          <Link href='/register' passHref>
            <a className={styles.registerLink}>Register</a>
          </Link>
        </div>
      )}
      {currentUser && (
        <button onClick={logUserOut} className={styles.registerLink}>
          Logout
        </button>
      )}
    </>
  )
}

export default AuthArea
