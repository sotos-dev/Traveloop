import AboutUs from "./AboutUs"
import AllCategories from "./AllCategories"
import styles from "./index.module.scss"

const Sidebar = ({ categories }) => {
  return (
    <>
      <div className={styles.sidebar}>
        {/* About Us Area */}
        <AboutUs />
        {/* All Categories Area */}
        <AllCategories categories={categories} />
      </div>
    </>
  )
}

export default Sidebar
