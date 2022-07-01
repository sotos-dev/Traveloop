import styles from "./index.module.scss"
import React, { useEffect, useRef, useState, createRef } from "react"

import MenuButton from "./MenuButton"
import MobileLogo from "./MobileLogo"
import SearchIcon from "./SearchIcon"
import SearchDropdown from "./SearchDropdown"
import NavArea from "./NavArea"

const NavMobile = () => {
  // Search Input Toggler
  const [showSearchInput, setShowSearchInput] = useState(false)
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

  const toggleSearchInput = () => {
    setShowSearchInput((prev) => (prev = !prev))
    setShowNavbar(false)
  }

  const toggleNavbar = () => {
    setShowNavbar((prev) => (prev = !prev))
    setShowSearchInput(false)
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
          {/* Search Icon */}
          <SearchIcon toggleSearchInput={toggleSearchInput} />
        </div>
        {/* Search Dropdown */}
        <SearchDropdown showSearchInput={showSearchInput} />
        {/* Mobile Nav Menu */}
        <NavArea showNavbar={showNavbar} />
      </div>
    </>
  )
}

export default NavMobile
