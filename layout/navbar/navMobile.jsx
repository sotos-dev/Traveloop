import Logo from "../../ui/Logo"
import styles from "./navMobile.module.scss"
import Divider from "../../ui/divider/Divider"
import Navlink from "./navlink"
import { CgMenuHotdog } from "react-icons/cg"
import { HiOutlineSearch } from "react-icons/hi"
import { useState } from "react"
import { outerLinks, destinationLinks } from "../../utils/navbarUtils"

const NavMobile = () => {
  // Search Input Toggler
  const [showSearchInput, setShowSearchInput] = useState(false)
  // Mobile Nav Toggler
  const [showNavbar, setShowNavbar] = useState(false)

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
      <div>
        <div className={styles.navWrapper}>
          {/* Menu Button */}
          <div onClick={toggleNavbar}>
            <CgMenuHotdog size={40} className={styles.navToggleButton} />
          </div>
          {/* Logo */}
          <div className={styles.logo}>
            <Logo />
          </div>
          {/* Search Icon */}
          <div onClick={toggleSearchInput} className={styles.searchIconWrapper}>
            <HiOutlineSearch size={30} className={styles.searchIcon} />
          </div>
        </div>
        {/* Search Dropdown */}
        <div
          className={`${
            showSearchInput ? styles.showSearchDropdown : styles.searchDropdown
          }`}>
          <label htmlFor='search-input' className={styles.searchLabel}>
            <input
              type='text'
              id='search-input'
              className={styles.searchInput}
              autoComplete='off'
              placeholder='Search posts...'
            />
            <HiOutlineSearch className={styles.inputSearchIcon} />
          </label>
        </div>
        {/* Mobile Nav Menu */}
        <nav
          className={` ${
            showNavbar ? styles.showMobileNav : styles.mobileNav
          }`}>
          <ul className={styles.mobileUl}>
            {outerLinks.map((outerLink, index) => {
              return (
                <>
                  <Navlink
                    // paint={styles.navlinks}
                    key={outerLink.name}
                    name={outerLink.name}
                    linkDestination={outerLink.linkDestination}
                  />
                  <Divider />
                  {index === 0
                    ? destinationLinks.map((destinationLink) => {
                        return (
                          <>
                            <Navlink
                              //   paint={styles.navlinks}
                              key={destinationLink.name}
                              name={destinationLink.name}
                              linkDestination={destinationLink.linkDestination}
                            />
                          </>
                        )
                      })
                    : null}
                </>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavMobile
