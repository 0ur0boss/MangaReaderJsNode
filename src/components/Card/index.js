import React from "react";
import styles from "./Card.module.css";
import BtnFav from "components/BtnFav";
import { cards } from "components/data/cards.js";

import { useHistory } from "react-router-dom";

const Card = ({ img, title, description, btn }) => {
  const history = useHistory();

  return (
    <div className={styles.card}>
      <div className={styles.card_body}>
        <img src={img} alt="" className={styles.card_img} />
        <h2 className={styles.card_title}> {title}</h2>
        <p className={styles.card_description}>{description}</p>
      </div>
      {/* <button className={styles.card_btn}>{Btn}</button> */}
      {/* <Link className={styles.card_btn} to="/manga-description">Acceder aux chapitres</Link> */}
      <button
        className={styles.card_btn}
        onClick={() => {
          history.push("/manga-description");}}type="button">{btn}
      </button>
      {cards.map(({ id }) => (
          <BtnFav id={id}/>
          ))}
      {/* <BtnFav id={id}/> */}
    </div>
  );
};

export default Card;