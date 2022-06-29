import Image from "next/image"
import Link from "next/link"
import HeroImage from "../../../assets/images/home-hero-photo.jpg"
import styles from "../1-heroSection/index.module.scss"
import Container from "../../../ui/container/Container"

const HeroSection = () => {
  return (
    <>
      <section className={styles.hero}>
        {/* Cover Hero Image */}
        <div className={styles.heroImg}>
          <Image
            src={HeroImage}
            alt='a bridge in nature'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
        {/* Content */}
        <Container>
          <div className={styles.content}>
            <p className={styles.firstP}>A travel for the</p>
            <h1 className={styles.heading}>Curious & Adventurous</h1>
            <p className={styles.secondP}>
              Choose
              <span>
                <Link href='/' passHref>
                  <a>Travel Topics Here </a>
                </Link>
              </span>
              to start your journey
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}

export default HeroSection
