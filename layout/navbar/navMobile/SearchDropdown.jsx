import { HiOutlineSearch } from "react-icons/hi"
import styles from "./searchDropdown.module.scss"

const SearchDropdown = ({ showSearchInput }) => {
  return (
    <>
      <div
        className={`${
          showSearchInput ? styles.showSearchDropdown : styles.searchDropdown
        }`}>
        <label htmlFor='search-input' className={styles.searchLabel}>
          <input
            type='text'
            id='search-input'
            className={styles.searchInput}
            autoComplete='off'
            placeholder='Search posts...'
          />
          <HiOutlineSearch className={styles.inputSearchIcon} />
        </label>
      </div>
    </>
  )
}

export default SearchDropdown
