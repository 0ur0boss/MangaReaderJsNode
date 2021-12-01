import React from "react";
import styles from "./BtnFav.module.css";


const BtnFav = ({ isFaved, onClick }) => {
  return (
    <img className={styles.heartbtn} type="button" onClick={onClick} src={isFaved ? "../../img/heartviolet.png" : "../../img/heart.png"} alt="ajouter aux favs"/>
    // <button className={styles.card_btn}
    //   type="button"
    //   onClick={onClick}
    //   // style={{ backgroundColor: isFaved ? "green" : "white" }}
    // >
    
    //   {/* {isFaved ? "Enlever des favoris" : "Ajouter aux favoris"} */}
    // </button>
    
  );
};

export default BtnFav;
