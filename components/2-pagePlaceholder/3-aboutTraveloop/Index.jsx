import AboutArea from "./AboutArea"
import AboutImages from "./AboutImages"
import AboutQuote from "./AboutQuote"

const AboutTraveloop = () => {
  return (
    <>
      <section className={aboutSection}>
        <Container>
          <div className={aboutSectionWrapper}>
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
