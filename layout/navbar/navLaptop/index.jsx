import Logo from "../../../ui/logo/Logo"
import styles from "./index.module.scss"
import NavArea from "./NavArea"
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
          {/* 4 - Auth Area */}
          <AuthArea />
        </div>
      </div>
    </>
  )
}

export default NavLaptop
