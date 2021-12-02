import React from "react";
import styles from "./BtnFav.module.css";
// import image100 from "../../img/heartempty.png";
// import image101 from "../../img/heartviolet.png";

import clsx from "clsx";

import { ReactComponent as Icon } from './icon.svg'

const BtnFav = ({ isFaved, onClick }) => {
  // console.log(styles)
  return (

    <div className={clsx(styles.icon, isFaved && styles.favoriteIcon)} >
      <Icon type="button" onClick={onClick} />
    </div>

    // <img className={styles.heartbtn} type="button" onClick={onClick} src={isFaved ? (image101) : (image100)}></img>
   
    // <p className={styles.hearty} type="button" onClick={onClick}>❤</p>
    // <button className={styles.hearty} type="button">❤</button>

    // <button className={styles.card_btn}
    //   type="button"
    //   onClick={onClick}
    //   // style={{ backgroundColor: isFaved ? "green" : "white" }}
    // >
    //   {isFaved ? "Enlever des favoris" : "Ajouter aux favoris"}
    // </button>
  );
};

export default BtnFav;
