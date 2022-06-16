import styles from "./index.module.scss"
import Container from "../../ui/container/Container"
import NavMobile from "./navMobile"
const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <NavMobile />
        </Container>
      </header>
    </>
  )
}

export default Navbar
