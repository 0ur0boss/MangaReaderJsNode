import React, { useContext }  from "react";
import styles from "./Home.module.css";
// import { cards } from "../../components/data/cards";
import Card from "../../components/Card";
import Slider from "../../components/Slider";
import SearchBar from "../../components/SearchBar";
import AppContext from "../../contexts/AppContext";

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

  return (
    <div>
      <div>
        <Slider />
      </div>
      <SearchBar handleSearch={handleSearch} />

      {/* le container qui a toutes les cards */}
      <div className={styles.wrapper}>
        {/* une card avec les differents options */}
        {/* i map the mangas and pass them to card */}
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
