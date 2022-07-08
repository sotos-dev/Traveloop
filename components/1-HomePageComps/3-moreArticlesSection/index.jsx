import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"
import MoreArticlesCard from "./MoreArticlesCard"
import Sidebar from "./sidebar"

const MoreArticlesSection = ({ categories }) => {
  return (
    <>
      <section className={styles.moreArticlesSection}>
        <Container>
          <div className={styles.moreArticlesWrapper}>
            {/* Articles + Pagination Area */}
            <div className={styles.articles}>
              <MoreArticlesCard categories={categories} />
            </div>
            {/* Sidebar Area */}
            <div className={styles.sidebar}>
              <Sidebar categories={categories} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default MoreArticlesSection
