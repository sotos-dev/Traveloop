import Link from "next/link"
import styles from "./footerLinks.module.scss"

const FooterLinks = () => {
  return (
    <>
      <div className={styles.linkWrapper}>
        <Link href='/' passHref>
          <a className={styles.link}>Topics</a>
        </Link>
        <Link href='/' passHref>
          <a className={styles.link}>Latest posts</a>
        </Link>
        <Link href='/about' passHref>
          <a className={styles.link}>About</a>
        </Link>
      </div>
    </>
  )
}

export default FooterLinks
