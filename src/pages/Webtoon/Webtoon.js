import React, { useContext } from 'react' 
import BtnFav from "components/BtnFav";
import { Link } from "react-router-dom";
import AppContext from "../../contexts/AppContext";


const Webtoon = ({ manga, favs, handleFav }) => {
   const { mangas, favs, toggleFav } = useContext(AppContext);
   const { img, title, btn, description, id } = manga;

   return (
      <div>
        <div>
          <img src={img} alt="" />
          <h2> {title}</h2>
          <p>{description}</p>
        </div>
        {/* <button className={styles.card_btn}>{Btn}</button> */}
        <Link to="/manga-description">
          <button
            type="button"
          >
            {btn}
          </button>
        </Link>
  
        <BtnFav
          id={id}
          isFaved={favs.includes(id)}
          onClick={() => handleFav(id)}
        />
      </div>
    );

}

export default Webtoon


