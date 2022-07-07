import Link from "next/link"
import React from "react"
import styles from "./sidebar.module.scss"

const Sidebar = ({ posts, categories }) => {
  return (
    <>
      <div className={styles.allCategoriesWrapper}>
        {/* Search Bar */}

        {/* Related Articles */}

        {/* Categories */}
        <h3 className={styles.title}>All Categories</h3>
        <div className={styles.categoriesWrapper}>
          {categories.map((category) => {
            return (
              <React.Fragment key={category.url}>
                <Link href={`/categories/${category.url}`}>
                  <p className={styles.category}>{category.category}</p>
                </Link>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Sidebar
