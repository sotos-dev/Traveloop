import Link from "next/link"
import { RiArrowDropDownLine } from "react-icons/ri"

import styles from "./navArea.module.scss"

const NavArea = () => {
  return (
    <>
      <nav className={styles.nav}>
        {/* Visible Nav Links */}
        <ul className={styles.visibleNavLinks}>
          <li className={styles.outerlinks}>
            {/* Categories Hover */}
            <div className={styles.categoriesHover}>
              <span>Topics</span>
              <RiArrowDropDownLine className={styles.dropDownIcon} />
              {/* Categories Links */}
              <ul className={styles.categoriesLinks}>
                <li>
                  <Link href='/categories/destinations' passHref>
                    <a className={styles.categoryLink}> Destinations</a>
                  </Link>
                </li>
                <li>
                  <Link href='/categories/travel-planning' passHref>
                    <a className={styles.categoryLink}> Travel planning</a>
                  </Link>
                </li>
                <li>
                  <Link href='/categories/family-travel' passHref>
                    <a className={styles.categoryLink}> Family travel</a>
                  </Link>
                </li>
                <li>
                  <Link href='/categories/travel-inspiration' passHref>
                    <a className={styles.categoryLink}> Travel inspiration</a>
                  </Link>
                </li>
                <li>
                  <Link href='/categories/travel-stories' passHref>
                    <a className={styles.categoryLink}> Stories</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.outerlinks}>
            <Link href='/about'> About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavArea
