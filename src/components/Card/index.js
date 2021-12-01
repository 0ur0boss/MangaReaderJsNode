import React from "react";
import styles from "./Card.module.css";
import BtnFav from "../BtnFav";
import { Link } from "react-router-dom";
import AppContext from "../../contexts/AppContext";


const Card = ({ manga, favs, handleFav }) => {
  const { img, title, btn, description, id } = manga;
  




  return (
    <div className={styles.card}>
      <div className={styles.card_body}>
        <img src={img} alt="" className={styles.card_img} />
        <h2 className={styles.card_title}> {title}</h2>
        <p className={styles.card_description}>{description}</p>
      </div>
      {/* <button className={styles.card_btn}>{Btn}</button> */}
      <Link to="/manga-description">
        <button
          className={styles.card_btn}
          type="button"
        >
          {btn}
        </button>
      </Link>

      <BtnFav className={styles.card_btn}
        id={id}
        isFaved={favs.includes(id)}
        onClick={() => handleFav(id)}
      />
    </div>
  );
};

export default Card;
