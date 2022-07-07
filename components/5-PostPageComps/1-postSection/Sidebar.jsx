import Category from "./Category"
import styles from "./sidebar.module.scss"

const Sidebar = ({ categories }) => {
  return (
    <>
      <div className={styles.allCategoriesWrapper}>
        <h3 className={styles.title}>All Categories</h3>
        <div className={styles.categoriesWrapper}>
          {/* {categories.map((item) => {
            return <Category key={item.name} item={item.name} />
          })} */}
        </div>
      </div>
    </>
  )
}

export default Sidebar
