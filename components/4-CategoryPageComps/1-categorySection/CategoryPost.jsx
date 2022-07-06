import Image from "next/image"
import styles from "./categoryPost.module.scss"
import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"

const MoreArticlesCard = ({ postsList }) => {
  return (
    <>
      {postsList.map((posts) => {
        return posts.map((post) => {
          return (
            <div className={styles.cardWrapper} key={post.title}>
              {/* Card Image */}
              <div className={styles.cardImgWrapper}>
                <Image
                  src={post.heroImg}
                  alt={post.title}
                  layout='fill'
                  objectFit='cover'
                  className={styles.cardImg}
                />
                {/* Card Category */}
                <p className={styles.cardCategory}>{post.category}</p>
              </div>
              {/* Card Content */}
              <div className={styles.cardContent}>
                {/* Card Date */}
                <p className={styles.date}>{post.date}</p>
                {/* Card Title */}
                <p className={styles.title}>{post.title}</p>
                {/* Card Excerpt */}
                <p className={styles.excerpt}>{post.smallCopy}</p>
                {/* Card CTA */}
                <div className={styles.cta}>
                  <Link href={`/categories/${post.category}/${post.slug}`}>
                    Read more
                  </Link>{" "}
                  <BsArrowRight className={styles.icon} />
                </div>
              </div>
            </div>
          )
        })
      })}
    </>
  )
}

export default MoreArticlesCard
