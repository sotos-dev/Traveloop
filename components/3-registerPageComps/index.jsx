import Container from "../../ui/container/Container"
import styles from "./index.module.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object()
  .shape({
    userEmail: yup.string().email().required(),
    userPassword: yup.string().min(6).max(10).required(),
    confirmUserPassword: yup
      .string()
      .oneOf([yup.ref("userPassword"), null])
      .required(),
  })
  .required()

const RegisterUser = () => {
  // Router
  const router = useRouter()
  // Auth
  const { registerUser } = useAuth()
  // State
  // const [userEmail, setUserEmail] = useState("")
  // const [userPassword, setUserPassword] = useState("")
  const [error, setError] = useState("")
  // Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const createUser = async (data) => {
    console.log(data)

    // try {
    //   await registerUser(userEmail, userPassword)
    //   router.push("/dashboard")
    // } catch (error) {
    //   setError("incorrect email or password")
    // }
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
                />
                <p>{errors.userPassword?.message}</p>
              </div>
              {/* Password Confirmation Field */}
              <div className={styles.inputWrapper}>
                <label htmlFor='confirm-password' className={styles.label}>
                  Confirm Password
                </label>
                <input
                  {...register("confirmPassword")}
                  type='password'
                  id='confirm-password'
                  className={styles.inputField}
                />
                <p>
                  {errors.confirmUserPassword &&
                    "Passwords should match please try again."}
                </p>
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
