import React from "react";
import styles from "./SearchBar.module.css";


const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const searchHandler = () => {};
    term={searchTerm};
    searchKeyword={searchHandler}

    return (
        <div className="search">
        <div className="icon input">
          <input type="text" placeholder="Search a Webtoons" className="prompt"></input>
        <i className="search icon"></i>
        </div>
      </div>
    )

};

export default SearchBar;