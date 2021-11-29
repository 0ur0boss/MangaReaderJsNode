// import styles from './Webtoon.module.css';
import React from 'react' 
// import { Link } from 'react-router-dom'
import { useState } from 'react';
// import { home } from "../Home/index.js";

const Webtoon = () => {

  const [favoris, setFavoris] = useState(false);
  

  const addFavoris = () => {
    setFavoris(!favoris);
    localStorage.setItem("favoris", true);
  }

  return (
    <button onClick={addFavoris} type="button">{favoris ? "Enlever des favoris" : "Ajouter aux favoris"}</button>
  )
   
}

export default Webtoon