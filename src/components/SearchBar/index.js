import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ handleSearch, search }) {
  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search a Webtoons"
        onChange={(e) => handleSearch(e.target.value)}
        value={search}
      />
      <div className={styles.search} onClick={() => handleSearch('')} />
    </div>
  );
}

export default SearchBar;
