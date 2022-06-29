import Image from "next/image"
import styles from "./whosEllisCard.module.scss"
import Ellis from "../../../assets/images/ellis.png"

const WhosNickCard = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.imgWrapper}>
          <Image src={Ellis} alt='Ellis' className={styles.img} />
        </div>
        <p className={styles.title}>Who's Ellis?</p>
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
