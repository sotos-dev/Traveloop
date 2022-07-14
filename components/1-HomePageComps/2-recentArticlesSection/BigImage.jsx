import Image from "next/image"
import Link from "next/link"
import FemaleTraveller from "../../../assets/images/travel.jpg"
import styles from "./bigImage.module.scss"

const BigImage = () => {
  return (
    <>
      {/* Big Image */}
      <div className={styles.bigImgWrapper}>
        <Image
          src={FemaleTraveller}
          alt='female traveler in narrow old fashioned street'
          layout='fill'
          objectFit='cover'
          className={styles.bigImg}
        />
        <div className={styles.bigImgShader}></div>

        {/* Big Image Content */}
        <div className={styles.bigImgContent}>
          <p className={styles.bigImgDate}>April 8, 2022</p>
          <p className={styles.bigImgTitle}>
            It's Easy to do better sustainable travel
          </p>
          <div className={styles.bigImgCategoryArea}>
            <Link href='/categories/travel-inspiration'>
              <a className={styles.bigImgCategories}>Travel inspiration</a>
            </Link>
            <Link href='/categories/travel-stories'>
              <a className={styles.bigImgCategories}>Stories</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BigImage
