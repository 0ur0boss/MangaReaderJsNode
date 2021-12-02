import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import AppContext from "../contexts/AppContext";
import cards from "components/data/cards";
// import posts from "components/data/posts";


// import Header from "components/Header";

// Pages
import Home from 'pages/Home'
import Webtoon from '../pages/Webtoon/Webtoon.js'

function App() {
  const [favs, setFavs] = useState([]);

  const toggleFav = (id) => {
    const isAlreadyFaved = favs.includes(id);

    if (isAlreadyFaved) {
      return setFavs((prev) => prev.filter((favId) => favId !== id));
    }

    setFavs((prev) => [...prev, id]);

  }

  const contextValues = {
    mangas: cards,
    favs,
    toggleFav
  }
  return (
    <AppContext.Provider value={contextValues}>
      <BrowserRouter>


        {/* <Header /> */}

        <Switch>

          <Route exact path="/Home">
            <Home />
          </Route>

          <Route exact path="/manga/:mangaId">
            <Webtoon />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            404
          </Route>

        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;


