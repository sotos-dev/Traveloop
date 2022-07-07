import styles from "./category.module.scss"

const Category = ({ item }) => {
  return (
    <>
      <p className={styles.category}>{item}</p>
    </>
  )
}

export default Category
