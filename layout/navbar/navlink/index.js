import Link from "next/link"
import styles from "../navMobile.module.scss"

const Navlink = ({ name, linkDestination, paint }) => {
  return (
    <>
      <Link href={linkDestination} passHref>
        <a className={styles.Navlinks}>{name}</a>
      </Link>
    </>
  )
}

export default Navlink
