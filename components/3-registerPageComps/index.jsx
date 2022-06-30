import Container from "../../ui/container/Container"
import styles from "./index.module.scss"
import { auth } from "../../firebase/firebase_config"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth"
import { useState } from "react"

const RegisterUser = () => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [user, setUser] = useState("")

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const createUser = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
      })
  }

  return (
    <>
      <section className={styles.registerSection}>
        <Container>
          <div className={styles.registerWrapper}>
            {/* Email Field */}
            <form onSubmit={createUser} className={styles.registerForm}>
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
              <button className={styles.registerButton}>Register</button>
            </form>
            {user && user.email}
          </div>
        </Container>
      </section>
    </>
  )
}

export default RegisterUser
