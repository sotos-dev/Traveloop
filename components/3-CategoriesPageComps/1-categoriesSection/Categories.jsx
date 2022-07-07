import styles from "./categories.module.scss"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Categories = ({ categories }) => {
  return (
    <>
      <div className={styles.grid}>
        {/* loop in here */}

        {categories.map((category) => {
          return (
            <React.Fragment key={category.id}>
              {/* Destination Category Gets an Extra CSS Styling Class */}
              {category.data.name === "Destinations" ? (
                <Link href={`/categories/${category.data.url}`} passHref>
                  <a
                    className={`${styles.imgOuterWrapper} ${styles.twoSpacePhoto}`}>
                    <Image
                      src={category.data.img}
                      alt='Destinations'
                      layout='fill'
                      objectFit='cover'
                      className={styles.img}
                      placeholder='blur'
                      blurDataURL={category.data.img}
                    />
                    <div className={styles.copyWrapper}>
                      <p className={styles.title}>{category.data.name}</p>
                      <p className={styles.copy}>{category.data.copy}</p>
                    </div>
                    <div className={styles.shader}></div>
                  </a>
                </Link>
              ) : (
                // Rest of Categories same styles
                <Link href={`/categories/${category.data.url}`} passHref>
                  <a className={styles.imgOuterWrapper}>
                    <Image
                      src={category.data.img}
                      alt='Destinations'
                      layout='fill'
                      objectFit='cover'
                      className={styles.img}
                    />

                    <div className={styles.copyWrapper}>
                      <p className={styles.title}>{category.data.name}</p>
                      <p className={styles.copy}>{category.data.copy}</p>
                    </div>
                    <div className={styles.shader}></div>
                  </a>
                </Link>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export default Categories
