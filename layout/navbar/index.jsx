import styles from "./index.module.scss"
import NavMobile from "./navMobile/Index"
import NavLaptop from "./navLaptop/Index"
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
