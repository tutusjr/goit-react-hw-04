import { useState } from "react";
import styles from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (query.trim() === "") {
      toast.error("Please Enter a Search Term");
      return;
    }
    onSearch(query);
    setQuery("");
    onSearch(query);
    setQuery("");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <button className={styles.searchButton} type="submit">
            {" "}
            <IoSearch />{" "}
          </button>
          <Toaster position="top-right" />
          <input
            className={styles.searchInput}
            onChange={handleChange}
            autoomplete="off"
            autoFocus
            value={query}
            type="text"
            name="search"
            placeholder="Search..."
          />
        </div>
      </form>
    </>
  );
}
