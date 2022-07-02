import Container from "../../ui/container/Container"
import styles from "./index.module.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useRouter } from "next/router"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useModal } from "../../context/ModalContext"
import Github from "../../assets/images/github.svg"
import Image from "next/image"
import { AiOutlineCloseCircle } from "react-icons/ai"
import AuthForm from "./AuthForm"

const AuthUser = () => {
  // State
  const [error, setError] = useState("")
  // Router
  const router = useRouter()
  // Auth Hook
  const { loginUser, registerUser } = useAuth()
  // Modal Hook
  const {
    showAuthModal,
    setShowAuthModal,
    showRegistrationForm,
    setShowRegistrationForm,
  } = useModal()
  // Yup Validation Schema
  const schema = Yup.object().shape({
    userEmail: Yup.string().email().required("Email is required"),
    userPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(12, "Password must be less than 12 characters")
      .required("Password is required"),
  })
  // Form Hook with Resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  // Form Submision - Auth user
  const authorizeUser = async (data) => {
    // Register User
    if (showRegistrationForm) {
      try {
        await registerUser(data.userEmail, data.userPassword)
        setShowAuthModal(false)
        // router.push("/")
      } catch (error) {
        const errorCode = error.code
        if (errorCode === "auth/wrong-password") {
          setError("Wrong password, please try again")
        } else if (errorCode === "auth/user-not-found") {
          setError("This email is not registered, please register")
        } else if (errorCode === "auth/invalid-email") {
          setError("This email is not valid, please use a valid email")
        } else if (errorCode === "auth/user-disabled") {
          setError("This user has been disabled")
        }
      }
    }
    // Login User
    if (!showRegistrationForm) {
      try {
        await loginUser(data.userEmail, data.userPassword)
        setShowAuthModal(false)
        // router.push("/")
      } catch (error) {
        const errorCode = error.code
        if (errorCode === "auth/wrong-password") {
          setError("Wrong password, please try again")
        } else if (errorCode === "auth/user-not-found") {
          setError("This email is not registered, please register")
        } else if (errorCode === "auth/invalid-email") {
          setError("This email is not valid, please use a valid email")
        } else if (errorCode === "auth/user-disabled") {
          setError("This user has been disabled")
        }
      }
    }
  }

  return (
    <>
      <section className={styles.authSection}>
        <Container>
          <div className={styles.authWrapper}>
            {/* Title */}
            {showRegistrationForm ? (
              <h2 className={styles.authTitle}>Create an Account</h2>
            ) : (
              <h2 className={styles.authTitle}>Log In</h2>
            )}
            {/* Under Title */}
            {showRegistrationForm ? (
              <p className={styles.underTitle}>
                Already have an account?
                <span
                  onClick={() => setShowRegistrationForm(false)}
                  className={styles.underTitleSpans}>
                  Login
                </span>
              </p>
            ) : (
              <p className={styles.underTitle}>
                Don't have an account?
                <span
                  onClick={() => setShowRegistrationForm(true)}
                  className={styles.underTitleSpans}>
                  Register
                </span>
              </p>
            )}
            {/* Close Icon */}
            <div
              className={styles.closeIconWrapper}
              onClick={() => setShowAuthModal((prev) => (prev = !prev))}>
              <AiOutlineCloseCircle className={styles.closeIcon} />
            </div>
            {/* Form  */}
            <AuthForm />
            <form
              onSubmit={handleSubmit(authorizeUser)}
              className={styles.form}>
              {/* Email Field */}
              <div className={styles.inputWrapper}>
                <label htmlFor='email' className={styles.label}>
                  Email Address
                </label>
                <input
                  {...register("userEmail")}
                  type='text'
                  id='email'
                  className={styles.inputField}
                />
                <p className={styles.errorMessage}>
                  {errors.userEmail?.message}
                </p>
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
                <p className={styles.errorMessage}>
                  {errors.userPassword?.message}
                </p>
              </div>
              {/* Register Button */}
              {showRegistrationForm && (
                <button className={styles.registerButton}>Register</button>
              )}
              {!showRegistrationForm && (
                <button className={styles.registerButton}>Login</button>
              )}

              <p className={styles.or}>Or</p>
              <button className={styles.githubButtonWrapper}>
                <div className={styles.githubImgWrapper}>
                  <Image src={Github} alt='github logo' />
                </div>
                <p className={styles.githubButtonCopy}>Continue with Github</p>
              </button>
              <p className={styles.firebaseError}>{error}</p>
              <p className={styles.privacyMessage}>
                By signing up you agree to TraveLoop Privacy Policy.
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AuthUser
