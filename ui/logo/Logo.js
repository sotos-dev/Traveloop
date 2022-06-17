import Image from "next/image"
import Link from "next/link"
import Traveloop from "../../assets/images/traveloop.svg"
import styles from "../logo/logo.module.scss"

const Logo = () => {
  return (
    <>
      <Link href='/' passHref>
        <a className={styles.logo}>
          <Image src={Traveloop} alt='logo' />
        </a>
      </Link>
    </>
  )
}

export default Logo
