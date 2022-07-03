import styles from "./authForm.module.scss"
import Github from "../../assets/images/github.svg"
import Image from "next/image"

const AuthForm = ({
  authorizeUser,
  handleSubmit,
  register,
  showRegistrationForm,
  errors,
  error,
  githubAuth,
}) => {
  return (
    <>
      <form className={styles.form}>
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
          <p className={styles.errorMessage}>{errors.userEmail?.message}</p>
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
          <p className={styles.errorMessage}>{errors.userPassword?.message}</p>
        </div>
        {/* Register Button */}
        {showRegistrationForm && (
          <button
            onClick={handleSubmit(authorizeUser)}
            className={styles.registerButton}>
            Register
          </button>
        )}
        {!showRegistrationForm && (
          <button
            onClick={handleSubmit(authorizeUser)}
            className={styles.registerButton}>
            Login
          </button>
        )}

        <p className={styles.or}>Or</p>
        <button className={styles.githubButtonWrapper}>
          <div className={styles.githubImgWrapper}>
            <Image src={Github} alt='github logo' />
          </div>
          <p onClick={githubAuth} className={styles.githubButtonCopy}>
            Continue with Github
          </p>
        </button>
        <p className={styles.firebaseError}>{error}</p>
        {showRegistrationForm && (
          <p className={styles.privacyMessage}>
            By signing up you agree to TraveLoop Privacy Policy.
          </p>
        )}
      </form>
    </>
  )
}

export default AuthForm
