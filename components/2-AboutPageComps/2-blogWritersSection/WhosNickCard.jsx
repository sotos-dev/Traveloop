import Image from "next/image"
import styles from "./whosNickCard.module.scss"
import Nick from "../../../assets/images/nick.png"

const WhosNickCard = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.imgWrapper}>
          <Image src={Nick} alt='Nick' className={styles.img} />
        </div>
        <p className={styles.title}>Who's Nick?</p>
        <p className={styles.copy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu habitasse
          at id euismod euismod. Faucibus imentum at nibh nec tempor venenatis
          proin. Donec vestibulum, ornare amet enim, orci. Mi quis sem eu morbi.
          Faucibus sed condimentum at nibh nec tempor venenatis proin. Donec
          vestibulum, ornare amet enim, orci.
        </p>
      </div>
    </>
  )
}

export default WhosNickCard
