import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"
import { useState } from "react"
import { useAuth } from "../../../context/AuthContext"
import { useRouter } from "next/router"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useModal } from "../../../context/ModalContext"
import Github from "../../../assets/images/github.svg"
import Image from "next/image"
import { AiOutlineCloseCircle } from "react-icons/ai"

const AuthUser = () => {
  // State
  const [error, setError] = useState("")
  // Router
  const router = useRouter()
  // Auth Hook
  const { loginUser } = useAuth()
  // Modal Hook
  const { setShowLoginModal, showRegistrationForm, setShowRegistrationForm } =
    useModal()
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

  // Form Submission - Register User
  const createUser = async (data) => {
    try {
      await registerUser(data.userEmail, data.userPassword)
      router.push("/dashboard")
    } catch (error) {
      setError("something was wrong with your request: " + error)
    }
  }

  return (
    <>
      <section className={styles.authSection}>
        <Container>
          <div className={styles.authWrapper}>
            {/* Title */}
            {showRegistrationForm ? (
              <h2>Create an Account</h2>
            ) : (
              <h2>Log In</h2>
            )}
            {showRegistrationForm ? (
              <p>
                Already have an account?
                <span onClick={() => setShowRegisterForm(false)}>Login</span>
              </p>
            ) : (
              <p>
                Don't have an account?
                <span onClick={() => setShowRegisterForm(true)}>Register</span>
              </p>
            )}
            {/* Close Icon */}
            <span onClick={() => setShowLoginModal((prev) => (prev = !prev))}>
              <AiOutlineCloseCircle size={30} />
            </span>
            {/* Form  */}
            <form
              onSubmit={handleSubmit(singInUser)}
              className={styles.showRegisterForm}>
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
              {showRegistrationForm && (
                <button className={styles.registerButton}>Register</button>
              )}
              {!showRegistrationForm && (
                <button className={styles.registerButton}>Login</button>
              )}
              <p className={styles.firebaseError}>{error}</p>
              <p>Or</p>
              <button className={styles.githubButton}>
                <Image src={Github} alt='github logo' />
                <p>Continue with Github</p>
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AuthUser
