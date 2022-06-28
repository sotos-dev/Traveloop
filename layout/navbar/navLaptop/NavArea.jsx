import Link from "next/link"
import { RiArrowDropDownLine } from "react-icons/ri"
import styles from "./navArea.module.scss"

const NavArea = () => {
  return (
    <>
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
    </>
  )
}

export default NavArea
