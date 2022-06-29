import React from "react"
import { CgMenuHotdog } from "react-icons/cg"
import styles from "./menuButton.module.scss"

const MenuButton = () => {
  return (
    <>
      <CgMenuHotdog size={40} className={styles.navToggleButton} />
    </>
  )
}

export default MenuButton
