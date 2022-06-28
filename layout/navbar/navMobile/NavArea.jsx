import Divider from "../../../ui/divider/Divider"
import Navlink from "./Navlink"
import { outerLinks, destinationLinks } from "../../../utils/navbarUtils"
import React from "react"
import styles from "./navArea.module.scss"

const NavArea = ({ showNavbar }) => {
  return (
    <>
      <nav
        className={` ${showNavbar ? styles.showMobileNav : styles.mobileNav}`}>
        <ul className={styles.mobileUl}>
          {outerLinks.map((outerLink, index) => {
            return (
              <React.Fragment key={outerLink.key}>
                <Navlink
                  classes={styles.navLinks}
                  name={outerLink.name}
                  linkDestination={outerLink.linkDestination}
                />
                {outerLink.key === "register" ? null : <Divider />}

                {index === 0
                  ? destinationLinks.map((destinationLink, index) => {
                      return (
                        <Navlink
                          classes={styles.indentedNavLinks}
                          key={destinationLink.key}
                          name={destinationLink.name}
                          linkDestination={destinationLink.linkDestination}
                        />
                      )
                    })
                  : null}
              </React.Fragment>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default NavArea
