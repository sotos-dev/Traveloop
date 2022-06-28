import { BiCopyright } from "react-icons/bi"
import styles from "./copyright.module.scss"

const RightsReserved = () => {
  return (
    <>
      <div className={styles.copyrightWrapper}>
        <BiCopyright className={styles.copyrightIcon} />
        <small>{new Date().getFullYear()} </small>
        <small className={styles.copyright}>
          TraveLoop. All rights reserved
        </small>
      </div>
    </>
  )
}

export default RightsReserved
