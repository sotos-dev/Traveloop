import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"
import MoreArticlesCard from "./MoreArticlesCard"
import { moreArticlesCardsData } from "../../../utils/HomepageUtils/index"
import AboutUs from "./AboutUs"
import AllCategories from "./AllCategories"
import SearchArticles from "./SearchArticles"

const MoreArticlesSection = () => {
  return (
    <>
      <section className={styles.moreArticlesSection}>
        <Container>
          <div className={styles.moreArticlesWrapper}>
            {/* Articles + Pagination Area */}
            <div className={styles.articles}>
              {moreArticlesCardsData.map((card) => {
                return <MoreArticlesCard card={card} key={card.title} />
              })}
            </div>
            {/* Sidebar Area */}
            <div className={styles.sidebar}>
              {/* Search Articles Area */}
              <SearchArticles />
              {/* About Us Area */}
              <AboutUs />
              {/* All Categories Area */}
              <AllCategories />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default MoreArticlesSection
