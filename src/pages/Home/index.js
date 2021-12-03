import React, { useContext }  from "react";
import styles from "./Home.module.css";
// import { cards } from "../../components/data/cards";
import Card from "../../components/Card";
import Slider from "../../components/Slider";
import SearchBar from "../../components/SearchBar";
import AppContext from "../../contexts/AppContext";
import ShowFavorite from "../../components/ZoneFav/ShowFavorite";


const Home = () => {

  // Je recupere le context qui contient la data de toutes les cards et mangas
  const { mangas, favs, toggleFav } = useContext(AppContext);
  const [search, setSearch] = React.useState(""); 
  const [filteredMangabyTag, setFilteredMangabyTag] = React.useState(""); 

  function handleFav(id) {
    toggleFav(id)
  }

  function handleSelect(selectValue){
    setFilteredMangabyTag(selectValue);
  }

  function handleSearch(searchString) {
    setSearch(searchString);
  }

  const filteredbyTag = mangas.filter((mangatag) =>
    mangatag.tag.includes(filteredMangabyTag)
  );

  const filteredMangas = filteredbyTag.filter((manga) =>
    manga.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        <Slider />
      </div>

      {/* Mettre les cartes favorites dans une zone dédiée*/}
      {favs.length > 0 && (
        <div>
          <h1>Vos favoris</h1>
          <ShowFavorite handleFav={handleFav} />
        </div>
      )}
      


      <SearchBar handleSearch={handleSearch} search={search} />

      <label>
      <div className={styles.custom_select}>
        <select 
        id="liste"
        onChange={(EMAA) => handleSelect(EMAA.target.value)}
        >
          <option value="">Tous les mangas</option>
          <option value="Fantastique">Fantastique</option>
          <option value="Romance">Romance</option>
          <option value="Comédie">Comédie</option>
          <option value="Thriller">Thriller</option>
          <option value="Drama">Drama</option>
        </select>
      </div>
      </label>

      {/* le container qui a toutes les cards */}
      <div className={styles.wrapper}>
        {/*map des mangas qui deviennent des cards */}
        {filteredMangas.map((manga) => (
          <Card
            key={manga.id}
            manga={manga}
            favs={favs}
            handleFav={handleFav}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
