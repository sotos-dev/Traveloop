import Image from "next/image"
import styles from "./photoBreaker.module.scss"
import Kayak from "../../../assets/images/kayak.jpg"

const PhotoSection = () => {
  return (
    <>
      <section className={styles.photoWrapper}>
        <Image
          src={Kayak}
          alt='Kayak'
          layout='responsive'
          objectFit='cover'
          className={styles.img}
          placeholder='blur'
        />
      </section>
    </>
  )
}

export default PhotoSection
