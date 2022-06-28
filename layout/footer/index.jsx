import styles from "./index.module.scss"
import Container from "../../ui/container/Container"
import FooterLinks from "./FooterLinks"
import FooterLogo from "./FooterLogo"
import Copyright from "./Copyright"

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          {/* Logo */}
          <FooterLogo />
          {/* Footer Links */}
          <FooterLinks />
        </div>
        {/* Rights Reserved */}
        <Copyright />
      </footer>
    </>
  )
}

export default Footer
