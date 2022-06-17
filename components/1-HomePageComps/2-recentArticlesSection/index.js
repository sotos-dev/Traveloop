import Image from "next/image"
import Container from "../../../ui/container/Container"
import styles from "./recentArticlesSection.module.scss"
import FemaleTraveller from "../../../assets/images/travel.jpg"
import { recentArticlesCardsData } from "../../../utils/HomepageUtils"
import RecentArticlesCard from "./recentArticlesCard"

const RecentArticlesSection = () => {
  return (
    <>
      <Container>
        <section className={styles.recentArticlesSection}>
          {/* Big Image */}
          <div className={styles.bigImg}>
            <Image
              src={FemaleTraveller}
              alt='female traveler in narrow old fashioned street'
            />
          </div>
          {/* Card Links + Title */}
          <div className={styles.content}>
            <div className={styles.title}>
              <p className={styles.overTitle}>RECENT ARTICLES</p>
              <h2 className={styles.sectionTitle}>News & Stories</h2>
            </div>
            <div className={styles.cardLinks}>
              {recentArticlesCardsData.map((card) => {
                return <RecentArticlesCard key={card.title} card={card} />
              })}
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default RecentArticlesSection
