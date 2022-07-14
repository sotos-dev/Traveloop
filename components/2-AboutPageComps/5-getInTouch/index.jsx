import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"

const GetInTouch = () => {
  return (
    <>
      <section className={styles.GetInTouchSection}>
        <Container>
          <div className={styles.GetInTouchWrapper}>
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
              habitasse at id euismod euismod. Faucibus imentum at nibh nec
              tempor venenatis proin. Donec vestibulum, ornare amet enim, orci.
              Mi quis sem eu morbi. Faucibus sed condimentum at nibh nec tempor
              venenatis proin. Donec vestibulum, ornare amet enim, orci. ✈️ 😊
            </p>
            <strong className={styles.email}>hello@hello.com</strong>
          </div>
        </Container>
      </section>
    </>
  )
}

export default GetInTouch
