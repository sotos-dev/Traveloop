import Image from "next/image"
import Link from "next/link"
import Authors from "../../../assets/images/author.png"
import styles from "./aboutUs.module.scss"
import { BsArrowRight } from "react-icons/bs"

const AboutUs = () => {
  return (
    <>
      <div className={styles.aboutUsWrapper}>
        <Image src={Authors} alt='blog writers' />
        <h3 className={styles.title}>About us</h3>
        <p className={styles.copy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
          aliquam faucibus purus tristique tellus dignissim sagittis amet,
          suscipit. Risus elit, dignissim nam nibh duis eu ut auctor viverra.
          Sollicitudin.
        </p>
        <Link href='/' passHref>
          <div className={styles.linkWrapper}>
            <a className={styles.link}>Learn more about us</a>
            <BsArrowRight className={styles.icon} />
          </div>
        </Link>
      </div>
    </>
  )
}

export default AboutUs
