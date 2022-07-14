import Link from "next/link"
import styles from "./magazineContent.module.scss"
import { BsArrowRight } from "react-icons/bs"

const MagazineContent = () => {
  return (
    <>
      <div className={styles.magazineContent}>
        <p className={styles.overTitle}>Free Monthly Magazine - May 2022</p>
        <h3 className={styles.title}>Our Latest Magazine Edition</h3>
        <p className={styles.copy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
          aliquam faucibus purus tristique tellus dignissim sagittis amet,
          suscipit...
        </p>
        <Link href='/categories' passHref>
          <div className={styles.linkWrapper}>
            <a className={styles.link}>Read posts</a>
            <BsArrowRight className={styles.icon} />
          </div>
        </Link>
      </div>
    </>
  )
}

export default MagazineContent
