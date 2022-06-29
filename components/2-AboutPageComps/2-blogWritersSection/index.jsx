import Container from "../../../ui/container/Container"
import IntroCopy from "./IntroCopy"
import WhosEllisCard from "./WhosEllisCard"
import WhosNickCard from "./WhosNickCard"
import styles from "./index.module.scss"

const BlogWriters = () => {
  return (
    <>
      <section className={styles.blogWritersSection}>
        <Container>
          <div className={styles.blogWritersWrapper}>
            <IntroCopy />
            <div className={styles.writersCardsWrapper}>
              <WhosNickCard />
              <WhosEllisCard />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default BlogWriters
