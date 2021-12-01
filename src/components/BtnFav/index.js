import React from "react";
import styles from "./BtnFav.module.css";

const BtnFav = ({ isFaved, onClick }) => {
  return (
    <button className={styles.card_btn}
      type="button"
      onClick={onClick}
      // style={{ backgroundColor: isFaved ? "green" : "white" }}
    >
      {isFaved ? "Enlever des favoris" : "Ajouter aux favoris"}
    </button>
  );
};

export default BtnFav;
