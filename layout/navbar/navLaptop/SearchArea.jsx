import { HiOutlineSearch } from "react-icons/hi"
import styles from "./searchArea.module.scss"

const SearchArea = () => {
  return (
    <>
      <label htmlFor='search-area-laptop' className={styles.searchInputLabel}>
        <input
          type='text'
          id='search-area-laptop'
          placeholder='Search articles...'
          className={styles.searchInputLaptop}
        />
        <HiOutlineSearch className={styles.searchIcon} />
      </label>
    </>
  )
}

export default SearchArea
