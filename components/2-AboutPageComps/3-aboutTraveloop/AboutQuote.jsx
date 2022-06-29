import styles from "./aboutQuote.module.scss"

const AboutQuote = () => {
  return (
    <>
      <div className={styles.quoteWrapper}>
        <p className={styles.quote}>
          “We plan our journeys without the help of professionals, ideas for
          destinations come through reading old books or browsing the internet
          for distinctive locations. Once focused on a region, our enthusiasm is
          abundant & we’re on our way.”
        </p>
      </div>
    </>
  )
}

export default AboutQuote
