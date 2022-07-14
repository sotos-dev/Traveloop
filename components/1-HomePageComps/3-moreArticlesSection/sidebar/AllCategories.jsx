import Link from "next/link"
import React from "react"
import styles from "./allCategories.module.scss"

const AllCategories = ({ categories }) => {
  return (
    <>
      <div className={styles.allCategoriesWrapper}>
        <h3 className={styles.title}>All Categories</h3>
        <div className={styles.categoriesWrapper}>
          {categories.map((category) => {
            return (
              <React.Fragment key={category.id}>
                <Link href={`categories/${category.data.url}`}>
                  <a className={styles.category}>{category.data.category}</a>
                </Link>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AllCategories
