import React from "react";
// import { Link } from 'react-router-dom'
import styles from "./Home.module.css";
import { cards } from "../../components/data/cards";
import Card from "../../components/Card";

const Home = () => {
  return (
    //le container qui a toutes les cards
    <div className={styles.wrapper}>
      {/* une card avec les differents options */}
      {cards.map(({ img, title, btn, description }) => (
        <Card img={img} title={title} btn={btn} description={description} />
      ))}
    </div>
  );
};

export default Home;