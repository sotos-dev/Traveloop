import Image from "next/image"
import styles from "./moreArticlesCard.module.scss"
import { BsArrowRight } from "react-icons/bs"

const MoreArticlesCard = ({
  card: { img, title, date, excerpt, category },
}) => {
  return (
    <>
      <div className={styles.cardWrapper}>
        {/* Card Image */}
        <div className={styles.cardImgWrapper}>
          <Image
            src={img}
            alt={title}
            layout='responsive'
            objectFit='cover'
            className={styles.cardImg}
          />
          {/* Card Category */}
          <p className={styles.cardCategory}>{category}</p>
        </div>
        {/* Card Content */}
        <div className={styles.cardContent}>
          {/* Card Date */}
          <p className={styles.date}>{date}</p>
          {/* Card Title */}
          <p className={styles.title}>{title}</p>
          {/* Card Excerpt */}
          <p className={styles.excerpt}>{excerpt}</p>
          {/* Card CTA */}
          <div className={styles.cta}>
            <p>Read more</p> <BsArrowRight />
          </div>
        </div>
      </div>
    </>
  )
}

export default MoreArticlesCard
