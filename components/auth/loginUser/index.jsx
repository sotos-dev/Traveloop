import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"
import { useState } from "react"
import { useAuth } from "../../../context/AuthContext"
import { useRouter } from "next/router"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useModal } from "../../../context/ModalContext"

const LoginUser = () => {
  // State
  const [error, setError] = useState("")
  // Router
  const router = useRouter()
  // Auth Hook
  const { loginUser } = useAuth()
  // Modal Hook
  const { setShowLoginModal } = useModal()
  // Yup Validation Schema
  const schema = Yup.object().shape({
    userEmail: Yup.string().email().required(),
    userPassword: Yup.string().min(6).max(10).required(),
  })
  // Form Hook with Resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  // Form Submision - Login user
  const singInUser = async (data) => {
    try {
      await loginUser(data.userEmail, data.userPassword)
      router.push("/dashboard")
    } catch (error) {
      setError("There was something wrong with your request please try again")
    }
  }

  return (
    <>
      <section className={styles.registerSection}>
        <Container>
          <div className={styles.registerWrapper}>
            <p>{error}</p>
            <span onClick={() => setShowLoginModal((prev) => (prev = !prev))}>
              X
            </span>
            <form
              onSubmit={handleSubmit(singInUser)}
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
                  autoComplete='on'
                  id='password'
                  className={styles.inputField}
                />
                <p>{errors.userPassword?.message}</p>
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
