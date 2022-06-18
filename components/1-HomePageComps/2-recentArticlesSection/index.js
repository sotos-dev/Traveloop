import Image from "next/image"
import Container from "../../../ui/container/Container"
import styles from "./recentArticlesSection.module.scss"
import FemaleTraveller from "../../../assets/images/travel.jpg"
import { recentArticlesCardsData } from "../../../utils/HomepageUtils"
import RecentArticlesCard from "./recentArticlesCard"
import Link from "next/link"

const RecentArticlesSection = () => {
  return (
    <>
      <section className={styles.recentArticlesSection}>
        <Container>
          {/* RAS Wrapper */}
          <div className={styles.rasWrapper}>
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
                  <Link href='/'>
                    <a className={styles.bigImgCategories}>
                      Travel inspiration
                    </a>
                  </Link>
                  <Link href='/'>
                    <a className={styles.bigImgCategories}>Stories</a>
                  </Link>
                </div>
              </div>
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
          </div>
        </Container>
      </section>
    </>
  )
}

export default RecentArticlesSection
