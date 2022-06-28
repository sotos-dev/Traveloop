import Link from "next/link"
// import styles from "../navMobile.module.scss"

const Navlink = ({ name, linkDestination, classes }) => {
  return (
    <>
      <Link href={linkDestination} passHref>
        <a className={classes}>{name}</a>
      </Link>
    </>
  )
}

export default Navlink
