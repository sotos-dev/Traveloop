import Divider from "../../../ui/divider/Divider"
import styles from "./navArea.module.scss"
import React from "react"
import Link from "next/link"
import { useAuth } from "../../../context/AuthContext"
import { useRouter } from "next/router"
import { useModal } from "../../../context/ModalContext"

const NavArea = ({ showNavbar }) => {
  // Auth
  const { currentUser, logout } = useAuth()
  // Router
  const router = useRouter()
  // Modal Context
  const { setShowAuthModal, setShowRegistrationForm } = useModal()

  const showRegisterModal = () => {
    setShowAuthModal((prev) => (prev = !prev))
    setShowRegistrationForm(true)
  }

  const showLoginModal = () => {
    setShowAuthModal((prev) => (prev = !prev))
    setShowRegistrationForm(false)
  }

  const logUserOut = () => {
    logout()
    router.push("/")
  }

  return (
    <>
      <nav
        className={` ${
          showNavbar ? styles.showMobileNav : styles.hideMobileNav
        }`}>
        {/* Nav Area Links */}
        <ul className={styles.mobileUl}>
          <li>
            <Link href='/categories' passHref>
              <a className={styles.navLinks}>Topics</a>
            </Link>
          </li>
          <Divider />
          <li>
            <Link href='categories/destinations' passHref>
              <a className={styles.indentedNavLinks}>Destinations</a>
            </Link>
          </li>
          <li>
            <Link href='categories/travel-planning' passHref>
              <a className={styles.indentedNavLinks}>Travel Planning</a>
            </Link>
          </li>
          <li>
            <Link href='categories/family-travel' passHref>
              <a className={styles.indentedNavLinks}>Family travel</a>
            </Link>
          </li>
          <li>
            <Link href='categories/travel-inspiration' passHref>
              <a className={styles.indentedNavLinks}>Travel inspiration</a>
            </Link>
          </li>
          <li>
            <Link href='categories/stories' passHref>
              <a className={styles.indentedNavLinks}>Stories</a>
            </Link>
          </li>
          <Divider />
          <li>
            <Link href='/latest-posts' passHref>
              <a className={styles.navLinks}>Latest posts</a>
            </Link>
          </li>
          <Divider />
          <li>
            <Link href='/about' passHref>
              <a className={styles.navLinks}>About</a>
            </Link>
          </li>
          <Divider />
          {/* Login/Registration and Logout */}
          {!currentUser && (
            <>
              <button onClick={showLoginModal} className={styles.navLinks}>
                Login
              </button>
              <Divider />
              <button onClick={showRegisterModal} className={styles.navLinks}>
                Register
              </button>
            </>
          )}
          {currentUser && (
            <>
              <button onClick={logUserOut} className={styles.navLinks}>
                Logout
              </button>
            </>
          )}
        </ul>
      </nav>
    </>
  )
}

export default NavArea
