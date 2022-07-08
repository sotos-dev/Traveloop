import Image from "next/image"
import styles from "./moreArticlesCard.module.scss"
import { BsArrowRight } from "react-icons/bs"
import React from "react"
import Link from "next/link"

const MoreArticlesCard = ({ categories }) => {
  console.log(categories)
  return (
    <>
      {categories.map((category) => {
        return (
          <React.Fragment key={category.id}>
            <Link href={`categories/${category.data.url}`}>
              <a className={styles.cardWrapper}>
                {/* Card Image */}
                <div className={styles.cardImgWrapper}>
                  <Image
                    src={category.data.img}
                    alt={category.data.name}
                    layout='fill'
                    objectFit='cover'
                    className={styles.cardImg}
                  />
                  {/* Card Category */}
                  <p className={styles.cardCategory}>{category.data.name}</p>
                </div>
                {/* Card Content */}
                <div className={styles.cardContent}>
                  {/* Card Date */}
                  <p className={styles.date}>{category.data.category}</p>
                  {/* Card Title */}
                  <p className={styles.title}>{category.data.name}</p>
                  {/* Card Excerpt */}
                  <p className={styles.excerpt}>{category.data.copy}</p>
                  {/* Card CTA */}
                  <div className={styles.cta}>
                    <p>Read more</p> <BsArrowRight className={styles.icon} />
                  </div>
                </div>
              </a>
            </Link>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default MoreArticlesCard
