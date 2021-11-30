import React from "react";
// import { Link } from 'react-router-dom'
import styles from "./Home.module.css";

import Slider from "components/Slider";
import Search from "components/SearchBar";

const Home = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>

      {/* le container qui a toutes les cards */}
      <div className={styles.wrapper}>
        {/* La search et toutes les cartes */}
        <Search/>
      </div>
    </div>
  );
};

export default Home;