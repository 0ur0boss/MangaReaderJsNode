import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ handleSearch }) {
  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search a Webtoons"
        onChange={(e) => handleSearch(e .target.value)}
      />
      <div className={styles.search}  />
    </div>
  );
}

export default SearchBar;
