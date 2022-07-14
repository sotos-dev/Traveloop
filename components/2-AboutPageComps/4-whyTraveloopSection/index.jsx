import Link from "next/link"
import Container from "../../../ui/container/Container"
import { BsArrowRight } from "react-icons/bs"
import styles from "./index.module.scss"

const WhyTraveloop = () => {
  return (
    <>
      <section className={styles.whyTraveloopSection}>
        <Container>
          <div className={styles.whyTraveloopWrapper}>
            <h2 className={styles.title}>Why Traveloop?</h2>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
              habitasse at id euismod euismod. Faucibus imentum at nibh nec
              tempor venenatis proin. Donec vestibulum, ornare amet enim, orci.
              Mi quis sem eu morbi. Faucibus sed condimentum at nibh nec tempor
              venenatis proin. Donec vestibulum, ornare amet enim, orci. ✈️ 😊
            </p>
            <Link href='/categories' passHref>
              <div className={styles.linkWrapper}>
                <a className={styles.link}>Browse Travel Blogs</a>
                <BsArrowRight className={styles.icon} />
              </div>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default WhyTraveloop
