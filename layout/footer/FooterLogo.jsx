import Logo from "../../ui/logo/Logo"
import styles from "./footerLogo.module.scss"

const FooterLogo = () => {
  return (
    <>
      <div className={styles.logoWrapper}>
        <Logo />
        <p className={styles.message}>Get Inspired! Tips and Stories</p>
      </div>
    </>
  )
}

export default FooterLogo
