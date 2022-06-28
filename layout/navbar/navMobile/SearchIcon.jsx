import { HiOutlineSearch } from "react-icons/hi"
import styles from "./searchIcon.module.scss"

const SearchIcon = ({ toggleSearchInput }) => {
  return (
    <>
      <div onClick={toggleSearchInput} className={styles.searchIconWrapper}>
        <HiOutlineSearch size={30} className={styles.searchIcon} />
      </div>
    </>
  )
}

export default SearchIcon
