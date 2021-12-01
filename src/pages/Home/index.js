import React from "react";
import styles from "./Home.module.css";
import { cards } from "../../components/data/cards";
import Card from "../../components/Card";
import Slider from "../../components/Slider";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  const [mangas, setMangas] = React.useState(cards);
  const [search, setSearch] = React.useState("");

  const [favs, setFavs] = React.useState([]);

  function handleFav(id) {
    const isAlreadyFaved = favs.includes(id);

    if (isAlreadyFaved) {
      return setFavs((prev) => prev.filter((favId) => favId !== id));
    }

    setFavs((prev) => [...prev, id]);
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
