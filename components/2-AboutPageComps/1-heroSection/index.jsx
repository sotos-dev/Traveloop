import Image from "next/image"
import HeroImage from "../../../assets/images/about-hero.jpg"
import styles from "./index.module.scss"

const HeroSection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src={HeroImage}
            alt='street with Havana old type 2 story houses'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
        <h1 className={styles.title}>Welcome to Traveloop</h1>
      </section>
    </>
  )
}

export default HeroSection
