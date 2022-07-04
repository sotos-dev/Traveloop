import styles from "./index.module.scss"
import TopicsGrid from "./TopicsGrid"
import Container from "../../../ui/container/Container"

const TravelTopics = () => {
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
            <TopicsGrid />
          </div>
        </Container>
      </section>
    </>
  )
}

export default TravelTopics
