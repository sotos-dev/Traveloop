import Container from "../../ui/container/Container"
import styles from "./index.module.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

const schema = Yup.object().shape({
  userEmail: Yup.string().email().required(),
  userPassword: Yup.string().min(6).max(10).required(),
})

const RegisterUser = () => {
  // State
  const [error, setError] = useState("")
  // Router
  const router = useRouter()
  // Auth
  const { registerUser, currentUser } = useAuth()

  // Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const createUser = async (data) => {
    try {
      await registerUser(data.userEmail, data.userPassword)
      console.log(currentUser)
      if (currentUser) {
        console.log("the user was registered succesfully")
        router.push("/dashboard")
      }
    } catch (error) {
      setError("something was wrong with your request: " + error)
    }
  }

  return (
    <>
      <section className={styles.registerSection}>
        <Container>
          <div className={styles.registerWrapper}>
            <p>{error}</p>
            <form
              onSubmit={handleSubmit(createUser)}
              className={styles.registerForm}>
              {/* Email Field */}
              <div className={styles.inputWrapper}>
                <label htmlFor='email' className={styles.label}>
                  Email
                </label>
                <input
                  {...register("userEmail")}
                  type='text'
                  id='email'
                  className={styles.inputField}
                  autoComplete='true'
                />
                <p>{errors.userEmail?.message}</p>
              </div>
              {/* Password Field */}
              <div className={styles.inputWrapper}>
                <label htmlFor='password' className={styles.label}>
                  Password
                </label>
                <input
                  {...register("userPassword")}
                  type='password'
                  id='password'
                  className={styles.inputField}
                  autoComplete='true'
                />
                <p>{errors.userPassword?.message}</p>
              </div>
              {/* Register Button */}
              <button className={styles.registerButton}>Register</button>
            </form>
            {}
          </div>
        </Container>
      </section>
    </>
  )
}

export default RegisterUser
