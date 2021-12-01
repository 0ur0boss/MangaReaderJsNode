import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ handleSearch }) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search a Webtoons"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
