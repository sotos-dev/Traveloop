import Image from "next/image"
import CityWoman from "../../../assets/images/city-woman.jpg"
import Photographer from "../../../assets/images/photographer.jpg"
import Van from "../../../assets/images/van.jpg"
import styles from "./aboutImages.module.scss"

const AboutImages = () => {
  return (
    <>
      <div className={styles.aboutImagesWrapper}>
        <div className={styles.imgsWrapper}>
          <div className={styles.imgWrapper}>
            <Image
              src={CityWoman}
              alt='CityWoman'
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
          <div className={styles.imgWrapper}>
            <Image
              src={Photographer}
              alt='Photographer'
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
          <div className={styles.imgWrapper}>
            <Image
              src={Van}
              alt='Van'
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
        </div>
        <p className={styles.copy}>
          Faucibus sed condimentum at nibh nec tempor venenatis proin.
        </p>
      </div>
    </>
  )
}

export default AboutImages
