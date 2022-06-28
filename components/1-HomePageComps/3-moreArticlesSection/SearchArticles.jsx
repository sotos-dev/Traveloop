import styles from "./searchArticles.module.scss"
import { HiOutlineSearch } from "react-icons/hi"
const SearchArticles = () => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          className={styles.inputField}
          placeholder='Search articles...'
        />
        <div className={styles.iconWrapper}>
          <HiOutlineSearch className={styles.searchIcon} />
        </div>
      </div>
    </>
  )
}

export default SearchArticles
