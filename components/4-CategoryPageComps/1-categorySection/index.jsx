import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"
import CategoryPost from "./CategoryPost"
import Sidebar from "./sidebar"

const CategorySection = ({ posts, categories }) => {
  return (
    <>
      <section className={styles.moreArticlesSection}>
        <Container>
          <div className={styles.moreArticlesWrapper}>
            {/* Posts */}
            <div className={styles.articles}>
              <CategoryPost posts={posts} />
            </div>
            {/* Sidebar */}
            <div className={styles.sidebar}>
              <Sidebar categories={categories} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CategorySection
