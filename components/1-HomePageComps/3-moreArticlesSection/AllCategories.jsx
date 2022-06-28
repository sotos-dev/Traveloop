import styles from "./allCategories.module.scss"
import Category from "./Category"

const AllCategories = ({ categories }) => {
  return (
    <>
      <div className={styles.allCategoriesWrapper}>
        <h3 className={styles.title}>All Categories</h3>
        <div className={styles.categoriesWrapper}>
          {categories.map((item) => {
            return <Category item={item.name} />
          })}
        </div>
      </div>
    </>
  )
}

export default AllCategories
