import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"
import BigImage from "./BigImage"
import RecentArticlesCard from "./RecentArticlesCard"

const RecentArticlesSection = ({ recentPosts }) => {
  return (
    <>
      <section className={styles.recentArticlesSection}>
        <Container>
          {/* RAS Wrapper */}
          <div className={styles.rasWrapper}>
            <BigImage />
            {/* Card Links + Title */}
            <div className={styles.content}>
              <div className={styles.title}>
                <p className={styles.overTitle}>RECENT ARTICLES</p>
                <h2 className={styles.sectionTitle}>News & Stories</h2>
              </div>
              <div className={styles.cardLinks}>
                {recentPosts.map((card) => {
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
