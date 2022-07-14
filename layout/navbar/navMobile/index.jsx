import styles from "./index.module.scss"
import React, { useEffect, useRef, useState } from "react"
import MenuButton from "./MenuButton"
import MobileLogo from "./MobileLogo"
import NavArea from "./NavArea"

const NavMobile = () => {
  // Mobile Nav Toggler
  const [showNavbar, setShowNavbar] = useState(false)
  const mobileButtonRef = useRef()

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.target !== mobileButtonRef.current) {
        setShowNavbar(false)
      }
    }
    document.body.addEventListener("click", closeMenu)
    return () => document.body.removeEventListener("click", closeMenu)
  }, [])

  const toggleNavbar = () => {
    setShowNavbar((prev) => (prev = !prev))
  }

  return (
    <>
      <div className={styles.hideNavbar}>
        {/* Default Visibles */}
        <div className={styles.navWrapper}>
          {/* Menu Button */}
          <button ref={mobileButtonRef} onClick={toggleNavbar}>
            <MenuButton />
          </button>
          {/* Logo */}
          <MobileLogo />
        </div>
        {/* Mobile Nav Menu */}
        <NavArea showNavbar={showNavbar} />
      </div>
    </>
  )
}

export default NavMobile
