import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"
import CategoryPost from "./CategoryPost"
import AboutUs from "./AboutUs"
import AllCategories from "./AllCategories"
import SearchArticles from "./SearchArticles"
import { categories } from "../../../utils/HomepageUtils/index"

const CategorySection = ({ postsList, category }) => {
  return (
    <>
      <section className={styles.moreArticlesSection}>
        <Container>
          <div className={styles.moreArticlesWrapper}>
            {/* Articles + Pagination Area */}
            <div className={styles.articles}>
              <CategoryPost postsList={postsList} category={category} />
            </div>
            {/* Sidebar Area */}
            <div className={styles.sidebar}>
              {/* Search Articles Area */}
              <SearchArticles />
              {/* About Us Area */}
              <AboutUs />
              {/* All Categories Area */}
              <AllCategories categories={categories} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CategorySection
