import Link from "next/link"
import styles from "./allCategories.module.scss"

const AllCategories = ({ categories }) => {
  return (
    <>
      <div className={styles.allCategoriesWrapper}>
        <h3 className={styles.title}>All Categories</h3>
        <div className={styles.categoriesWrapper}>
          {categories.map((category) => {
            return (
              <Link href={`${category.data.url}`}>
                <a key={category.id} className={styles.category}>
                  {category.data.category}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AllCategories
