import styles from "./index.module.scss"
import Container from "../../ui/container/Container"
import NavMobile from "./navMobile"
import NavLaptop from "./navLaptop"
const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <NavMobile />
          <NavLaptop />
        </Container>
      </header>
    </>
  )
}

export default Navbar
