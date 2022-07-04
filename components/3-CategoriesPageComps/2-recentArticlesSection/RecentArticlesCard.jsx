import Image from "next/image"
import Link from "next/link"
import styles from "./recentArticlesCard.module.scss"

const RecentArticlesCard = ({ card }) => {
  return (
    <>
      <Link href='/'>
        <div className={styles.card}>
          {/* Card Image */}
          <div className={styles.img}>
            <Image src={card.img} alt={card.title} layout='responsive' />
            <p className={styles.category}>{card.category}</p>
          </div>
          {/* Card Content */}
          <div className={styles.content}>
            {/* Card Date */}
            <p className={styles.date}>{card.date}</p>
            {/* Card Title */}
            <p className={styles.title}>{card.title}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default RecentArticlesCard
