import Logo from "../../../ui/logo/Logo"
import styles from "./index.module.scss"
import { useState } from "react"
import NavArea from "./NavArea"
import SearchArea from "./SearchArea"
import AuthArea from "./AuthArea"

const NavLaptop = () => {
  return (
    <>
      <div className={styles.navLaptopWrapper}>
        {/* Left Side Nav */}
        <div className={styles.flexSides}>
          {/* 1 - Logo */}
          <Logo />
          {/* 2 - Nav Menu */}
          <NavArea />
        </div>
        {/* Right Side Nav */}
        <div className={styles.flexSides}>
          {/* 3 - Search Area */}
          <SearchArea />
          {/* 4 - Auth Area */}
          <AuthArea />
        </div>
      </div>
    </>
  )
}

export default NavLaptop
