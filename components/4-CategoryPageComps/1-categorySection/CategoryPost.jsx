import Image from "next/image"
import styles from "./categoryPost.module.scss"
import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"
import React from "react"

const CategoryPost = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <React.Fragment key={post.slug}>
            <Link href={`${post.category}/${post.slug}`}>
              <div className={styles.cardWrapper}>
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
                    <span>Read more</span>
                    <BsArrowRight className={styles.icon} />
                  </div>
                </div>
              </div>
            </Link>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default CategoryPost
