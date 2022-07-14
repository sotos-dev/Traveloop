import Image from "next/image"
import Magazine from "../../../assets/images/magazine.png"
import styles from "./magazinePhoto.module.scss"

const MagazinePhoto = () => {
  return (
    <>
      <div className={styles.imgWrapper}>
        <Image
          src={Magazine}
          alt='magazine'
          className={styles.img}
          placeholder='blur'
        />
      </div>
    </>
  )
}

export default MagazinePhoto
