import styles from "./introCopy.module.scss"

const IntroCopy = () => {
  return (
    <>
      <div className={styles.introCopyWrapper}>
        <p className={styles.title}>👋 Hi! We're Ellis & Nick,</p>
        <p className={styles.copy}>
          Volutpat leo morbi in venenatis urna, ut tincidunt aliquam ut.
          Malesuada mattis aliquam, gravida eget cursus mattis vel nisl amet.
          Sagittis proin quam aliquam, viverra lacus, ante sit. Lectus mollis
          congue scelerisque aliquet eu sed imperdiet eget sed.{" "}
        </p>
      </div>
    </>
  )
}

export default IntroCopy
