import styles from "./index.module.scss"
import Categories from "./Categories"
import Container from "../../../ui/container/Container"
import { db } from "../../../firebase/firebase_config"
import { collection, getDocs } from "firebase/firestore"
// import { useDB } from "../../../context/DBContext"

// const { getDestinationPosts } = useDB()

const CategoriesSection = ({ categories }) => {
  return (
    <>
      <section className={styles.travelTopicsSection}>
        <Container>
          <div className={styles.travelTopicsWrapper}>
            <h1 className={styles.title}>Travel Topics</h1>
            <p className={styles.copy}>
              We create inspiring travel blogs about the world’s most beautiful
              places to make planning your holiday a piece of cake!
            </p>
            <Categories categories={categories} />
          </div>
        </Container>
      </section>
    </>
  )
}

export default CategoriesSection
