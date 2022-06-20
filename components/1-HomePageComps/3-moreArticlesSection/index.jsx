import Container from "../../../ui/container/Container"
import styles from "./moreArticles.module.scss"
import MoreArticlesCard from "./moreArticlesCard"
import { moreArticlesCardsData } from "../../../utils/HomepageUtils/index"
const MoreArticlesSection = () => {
  return (
    <>
      <section className={styles.moreArticlesSection}>
        <Container>
          <div className={styles.moreArticlesWrapper}>
            {/* Articles + Pagination Area */}
            <div>
              {moreArticlesCardsData.map((card) => {
                return <MoreArticlesCard card={card} key={card.title} />
              })}
            </div>
            {/* Sidebar Area */}
            <div className={styles.sidebar}>
              {/* Search Articles Area */}
              <div>
                <label htmlFor='search-articles'>
                  <input type='text' />
                </label>
              </div>
              {/* About Us Area */}
              <div></div>
              {/* All Categories Area */}
              <div></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default MoreArticlesSection
