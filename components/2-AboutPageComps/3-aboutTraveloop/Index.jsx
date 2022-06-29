import Container from "../../../ui/container/Container"
import AboutArea from "./AboutArea"
import AboutImages from "./AboutImages"
import AboutQuote from "./AboutQuote"
import styles from "./index.module.scss"

const AboutTraveloop = () => {
  return (
    <>
      <section className={styles.aboutSection}>
        <Container>
          <div className={styles.aboutSectionWrapper}>
            <AboutArea />
            <AboutImages />
            <AboutQuote />
          </div>
        </Container>
      </section>
    </>
  )
}

export default AboutTraveloop
