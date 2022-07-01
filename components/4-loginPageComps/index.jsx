import Container from "../../ui/container/Container"
import styles from "./index.module.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useRouter } from "next/router"

const LoginUser = () => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  const { loginUser, currentUser } = useAuth()
  console.log(currentUser)

  const singInUser = async (e) => {
    e.preventDefault()

    if (!userEmail || !userPassword) {
      setError("Please enter email and password")
      return
    }

    try {
      const { user } = await loginUser(userEmail, userPassword)
      setError("")
      console.log(user)

      if (!user) {
        console.log("there has been an error sir")
        setError("there has been an error sir")
        return
      }
      console.log("all good mate")
      router.push("/dashboard")
    } catch (error) {
      console.log("firebase error")
      setError("incorrect email or password: " + error)
    }
  }

  return (
    <>
      <section className={styles.registerSection}>
        <Container>
          <div className={styles.registerWrapper}>
            <p>{error}</p>
            <form onSubmit={singInUser} className={styles.registerForm}>
              {/* Email Field */}
              <div className={styles.inputWrapper}>
                <label htmlFor='email' className={styles.label}>
                  Email
                </label>
                <input
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  type='text'
                  id='email'
                  className={styles.inputField}
                />
              </div>
              {/* Password Field */}
              <div className={styles.inputWrapper}>
                <label htmlFor='password' className={styles.label}>
                  Password
                </label>
                <input
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  type='password'
                  name='password'
                  autoComplete='on'
                  id='password'
                  className={styles.inputField}
                />
              </div>
              {/* Register Button */}
              <button className={styles.registerButton}>Login</button>
            </form>
            {}
          </div>
        </Container>
      </section>
    </>
  )
}

export default LoginUser
