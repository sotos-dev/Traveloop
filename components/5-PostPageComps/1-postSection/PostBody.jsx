import Image from "next/image"
import styles from "./postBody.module.scss"

const PostBody = ({ post }) => {
  return (
    <>
      <div className={styles.postBodyWrapper}>
        <h2 className={styles.postTitle2}>{post.title2}</h2>
        <p className={styles.copy}>{post.copy}</p>
        <div className={styles.imgOuterWrapper}>
          <div className={styles.imgWrapper}>
            <Image
              src={post.img1}
              alt={post.title}
              layout='fill'
              objectFit='cover'
              className={styles.img}
              placeholder='blur'
              blurDataURL={post.img1}
            />
          </div>
          <div className={styles.imgWrapper}>
            <Image
              src={post.img2}
              alt={post.title}
              layout='fill'
              objectFit='cover'
              className={styles.img}
              placeholder='blur'
              blurDataURL={post.img2}
            />
          </div>
        </div>
        <p className={styles.copy}>{post.copy}</p>
        <p className={`${styles.copy} ${styles.lastCopy}`}>{post.smallCopy}</p>
      </div>
    </>
  )
}

export default PostBody
