import { CgMenuHotdog } from "react-icons/cg"
import styles from "./menuButton.module.scss"

const MenuButton = ({ toggleNavbar }) => {
  return (
    <>
      <div onClick={toggleNavbar}>
        <CgMenuHotdog size={40} className={styles.navToggleButton} />
      </div>
    </>
  )
}

export default MenuButton
