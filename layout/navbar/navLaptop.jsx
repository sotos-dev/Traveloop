import Logo from "../../ui/logo/Logo"
import styles from "./navLaptop.module.scss"
import { HiOutlineSearch } from "react-icons/hi"
import Link from "next/link"
import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri"

const NavLaptop = () => {
  const [showDropDown, setShowDropDown] = useState(false)

  const toggleDropDown = () => {}
  return (
    <>
      <div className={styles.navLaptopWrapper}>
        {/* Left Side Nav */}
        <div className={styles.flexSides}>
          {/* 1 - Logo */}
          {/* <div> */}
          <Logo />
          {/* </div> */}
          {/* 2 - Nav Menu */}
          <nav>
            <ul className={styles.outerLinksArea}>
              {/* Topics LI */}
              <li className={`${styles.topicsLink} ${styles.outerlinks}`}>
                <Link href='/'>
                  <>
                    Topics
                    <RiArrowDropDownLine className={styles.dropDownIcon} />
                  </>
                </Link>
                <ul className={styles.innerLinksArea}>
                  <li>
                    <Link href='/' passHref>
                      <a className={styles.innerLinks}> Destinations</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/' passHref>
                      <a className={styles.innerLinks}> Travel planning</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/' passHref>
                      <a className={styles.innerLinks}> Family travel</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/' passHref>
                      <a className={styles.innerLinks}> Travel inspiration</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/' passHref>
                      <a className={styles.innerLinks}> Stories</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles.outerlinks}>
                <Link href='/'> Latest Posts</Link>
              </li>
              <li className={styles.outerlinks}>
                <Link href='/'> About</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Right Side Nav */}
        <div className={styles.flexSides}>
          {/* 3 - Search Area */}
          <label
            htmlFor='search-area-laptop'
            className={styles.searchInputLabel}>
            <input
              type='text'
              id='search-area-laptop'
              placeholder='Search articles...'
              className={styles.searchInputLaptop}
            />
            <HiOutlineSearch className={styles.searchIcon} />
          </label>
          {/* 4 - Auth Area */}
          <div className={styles.authArea}>
            <Link href='/' passHref>
              <a className={styles.loginLink}>Login</a>
            </Link>
            <Link href='/' passHref>
              <a className={styles.registerLink}>Register</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavLaptop
