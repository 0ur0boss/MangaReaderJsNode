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

  function handleFav(id) {
    toggleFav(id)
  }

  function handleSearch(searchString) {
    setSearch(searchString);
  }

  const filteredMangas = mangas.filter((manga) =>
    manga.title.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(favs);

  return (
    <div>
      <div>
        <Slider />
      </div>

      {/* Mettre les cartes favorites dans une zone dédiée*/}
      <ShowFavorite handleFav={handleFav} />
      

      <SearchBar handleSearch={handleSearch} />


      <div className={styles.custom_select}>
        <select>
          <option value="0">Tous les mangas</option>
          <option value="1">Fantastique</option>
          <option value="2">Romance</option>
          <option value="3">Comédie</option>
          <option value="4">Thriller</option>
          <option value="5">Drama</option>
        </select>
      </div>

      {/* le container qui a toutes les cards */}
      <div className={styles.wrapper}>
        {/* une card avec les differents options */}

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
