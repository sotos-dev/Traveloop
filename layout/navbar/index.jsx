import styles from "./index.module.scss"
import NavMobile from "./navMobile"
import NavLaptop from "./navLaptop"
const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <NavMobile />
          <NavLaptop />
        </div>
      </header>
    </>
  )
}

export default Navbar
