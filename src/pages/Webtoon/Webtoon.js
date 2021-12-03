import React, { useContext, useState, useEffect } from 'react' 
// import BtnFav from "components/BtnFav";
import { useParams } from "react-router-dom";
import AppContext from "../../contexts/AppContext";
import styles from "./Webtoon.module.css";
import { Link } from "react-router-dom";
import classNames from "classNames";



const Webtoon = () => {
  // je recupaire le l'iD dans l URL
  const { mangaId } = useParams();
  const { mangas } = useContext(AppContext);
  const [filteredManga, setFilteredManga] = useState();

  useEffect(() => {
    setFilteredManga(mangas.find(manga => manga.id === parseInt(mangaId)));
  }, [mangaId, mangas]);



  return (<div>

      <div >
        <img src={filteredManga?.img || 'no img'} alt="" className={styles.web_img}  />
        <div className={styles.web_container}>
          <div className={styles.web_containerStart}>
          <Link to={`/Home`}>
            <button className={styles.web_btn}  type="button">Retour a l'Accueil</button>
          </Link>
            <div className={classNames(styles.web_tag, styles.web_txt)} >tag : {filteredManga?.tag || 'no tag'}</div>
            <h1 className={styles.web_title} >Title : {filteredManga?.title || 'no title'}</h1>
            <div className={styles.web_author} >author : {filteredManga?.author || 'no author'}</div>
          </div>
          <div className={styles.web_containerEnd}>
            <div className={styles.web_description}>Description: {filteredManga?.description || 'no description'}</div>
            <a className={styles.web_a} href="https://www.webtoons.com/fr">Lire le chapitre 1</a>
          </div>
        </div>
      </div>
    </div>
   );

}

export default Webtoon


