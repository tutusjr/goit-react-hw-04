import { useState } from "react";
import styles from "./SearchBar.module.css"
import { IoSearch } from "react-icons/io5";

export default function SearchBar({onSearch}) {

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
    setQuery('')
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <button className={styles.searchButton}   type="submit"> <IoSearch/> </button>
        <input className={styles.searchInput}   onChange={handleChange} autoomplete="off"   autoFocus value={query} type="text"   name="search" placeholder="Search..." />
      </div>
      </form>
    </>
  );
}
