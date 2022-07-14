import Container from "../../ui/container/Container"
import styles from "./index.module.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useModal } from "../../context/ModalContext"
import { AiOutlineCloseCircle } from "react-icons/ai"
import AuthForm from "./AuthForm"

const AuthUser = () => {
  // State
  const [error, setError] = useState("")
  // Auth Context
  const { loginUser, registerUser, authWithGithub, currentUser } = useAuth()
  // Modal Context
  const { setShowAuthModal, showRegistrationForm, setShowRegistrationForm } =
    useModal()
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
      } catch (error) {
        if (error.code === "auth/wrong-password") {
          setError("Wrong password, please try again")
        } else if (error.code === "auth/user-not-found") {
          setError("This email is not registered, please register")
        } else if (error.code === "auth/invalid-email") {
          setError("This email is not valid, please use a valid email")
        }
      }
    }
    // Login User
    if (!showRegistrationForm) {
      try {
        await loginUser(data.userEmail, data.userPassword)
        setShowAuthModal(false)
      } catch (error) {
        if (error.code === "auth/wrong-password") {
          setError("Wrong password, please try again")
        } else if (error.code === "auth/user-not-found") {
          setError("This email is not registered, please register")
        } else if (error.code === "auth/invalid-email") {
          setError("This email is not valid, please use a valid email")
        }
      }
    }
  }

  const githubAuth = async (e) => {
    e.preventDefault()

    try {
      await authWithGithub()
      setShowAuthModal(false)
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Wrong password, please try again")
      } else if (error.code === "auth/user-not-found") {
        setError("This email is not registered, please register")
      } else if (error.code === "auth/invalid-email") {
        setError("This email is not valid, please use a valid email")
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
                Don&apos;t have an account?
                <span
                  onClick={() => setShowRegistrationForm(true)}
                  className={styles.underTitleSpans}>
                  Register
                </span>
              </p>
            )}
            {/* Close Icon */}
            <div onClick={() => setShowAuthModal((prev) => (prev = !prev))}>
              <AiOutlineCloseCircle className={styles.closeIcon} />
            </div>
            {/* Form  */}
            <AuthForm
              authorizeUser={authorizeUser}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              error={error}
              showRegistrationForm={showRegistrationForm}
              githubAuth={githubAuth}
            />
          </div>
        </Container>
      </section>
    </>
  )
}

export default AuthUser
