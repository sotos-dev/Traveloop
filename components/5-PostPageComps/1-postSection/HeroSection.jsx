import Image from "next/image"
import styles from "./heroSection.module.scss"

const HeroSection = ({ post }) => {
  return (
    <>
      <div className={styles.postWrapper}>
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <p className={styles.postCategory}>{post.category.toUpperCase()}</p>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <div className={styles.divider}></div>
          <p className={styles.postCopy}>{post.copy}</p>
        </div>
        {/* Hero Image */}
        <div className={styles.heroImgWrapper}>
          <Image
            src={post.heroImg}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
      </div>
    </>
  )
}

export default HeroSection
