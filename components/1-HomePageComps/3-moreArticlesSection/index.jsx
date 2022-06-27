import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"
import MoreArticlesCard from "./MoreArticlesCard"
import { moreArticlesCardsData } from "../../../utils/HomepageUtils/index"
import AboutUs from "./AboutUs"

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
              <AboutUs />
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
