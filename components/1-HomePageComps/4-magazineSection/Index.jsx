import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"
import MagazineContent from "./MagazineContent"
import MagazinePhoto from "./MagazinePhoto"
import PhotoBreaker from "./PhotoBreaker"

const MagazineSection = () => {
  return (
    <>
      <section className={styles.magazineSection}>
        <PhotoBreaker />
        <Container>
          <div className={styles.magazineWrapper}>
            <MagazineContent />
            <MagazinePhoto />
          </div>
        </Container>
      </section>
    </>
  )
}

export default MagazineSection
