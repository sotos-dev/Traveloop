import styles from "./topicsGrid.module.scss"
import Image from "next/image"
import Destinations from "../../../assets/images/destinations.jpg"
import TravelPlanning from "../../../assets/images/travel-planning.jpg"
import FamilyTravel from "../../../assets/images/family-travel.jpg"
import TravelInspiration from "../../../assets/images/travel-inspiration.jpg"
import Stories from "../../../assets/images/travel-stories.jpg"
import Parthenon from "../../../assets/images/parthenon.jpg"
import Link from "next/link"

const TopicsGrid = () => {
  return (
    <>
      <div className={styles.grid}>
        {/* Image */}
        <Link href='/' passHref>
          <a className={`${styles.imgOuterWrapper} ${styles.island}`}>
            <div className={styles.imgWrapper}>
              <Image
                src={Destinations}
                alt='Destinations'
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
            <div className={styles.copyWrapper}>
              <p className={styles.title}>Destinations</p>
              <p className={styles.copy}>
                Explore more than 150 destinations around the world
              </p>
            </div>
            <div className={styles.shader}></div>
          </a>
        </Link>
        {/* Image */}
        <Link href='/' target='_blank'>
          <a className={`${styles.imgOuterWrapper} ${styles.parthenon}`}>
            <div className={styles.imgWrapper}>
              <Image
                src={Parthenon}
                alt='Parthenon'
                layout='responsive'
                objectFit='cover'
                className={styles.img}
              />
            </div>
            <div className={styles.copyWrapper}>
              <p className={styles.title}>Destinations</p>
              <p className={styles.copy}>
                Explore more than 150 destinations around the world
              </p>
            </div>
            <div className={styles.shader}></div>
          </a>
        </Link>
        {/* Image */}
        <Link href='/'>
          <a className={styles.imgOuterWrapper}>
            <div className={styles.imgWrapper}>
              <Image
                src={TravelPlanning}
                alt='Travel Planning'
                className={styles.img}
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className={styles.copyWrapper}>
              <p className={styles.title}>Travel Planning</p>
              <p className={styles.copy}>
                More that 30 Tips for a well organized trip
              </p>
            </div>
            <div className={styles.shader}></div>
          </a>
        </Link>
        {/* Image */}
        <Link href='/' passHref>
          <a className={styles.imgOuterWrapper}>
            <div className={styles.imgWrapper}>
              <Image
                src={FamilyTravel}
                alt='Family Travel'
                className={styles.img}
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className={styles.copyWrapper}>
              <p className={styles.title}>Family Travel</p>
              <p className={styles.copy}>
                Everything you need to know when traveling with your family
              </p>
            </div>
            <div className={styles.shader}></div>
          </a>
        </Link>
        {/* Image */}
        <Link href='/' passHref>
          <a className={styles.imgOuterWrapper}>
            <div className={styles.imgWrapper}>
              <Image
                src={TravelInspiration}
                alt='Travel Inspiration'
                className={styles.img}
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className={styles.copyWrapper}>
              <p className={styles.title}>Travel Inspiration</p>
              <p className={styles.copy}>
                What you need to know when traveling with your family
              </p>
            </div>
            <div className={styles.shader}></div>
          </a>
        </Link>
        {/* Image */}
        <Link href='/' passHref>
          <a className={styles.imgOuterWrapper}>
            <div className={styles.imgWrapper}>
              <Image
                src={Stories}
                alt='Stories'
                className={styles.img}
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className={styles.copyWrapper}>
              <p className={styles.title}>Stories</p>
              <p className={styles.copy}>
                Plenty of travel stories to keep you motivated
              </p>
            </div>
            <div className={styles.shader}></div>
          </a>
        </Link>
      </div>
    </>
  )
}

export default TopicsGrid
