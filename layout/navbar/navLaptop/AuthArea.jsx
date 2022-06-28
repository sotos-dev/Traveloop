import Link from "next/link"
import styles from "./authArea.module.scss"

const AuthArea = () => {
  return (
    <>
      <div className={styles.authArea}>
        <Link href='/' passHref>
          <a className={styles.loginLink}>Login</a>
        </Link>
        <Link href='/' passHref>
          <a className={styles.registerLink}>Register</a>
        </Link>
      </div>
    </>
  )
}

export default AuthArea
