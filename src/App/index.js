import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

// import Header from "components/Header";

// Pages
import Home from 'pages/Home'
import Webtoon from '../pages/Webtoon/Webtoon.js'

function App() {
  return (

    <BrowserRouter>


      {/* <Header /> */}

      <Switch>
        

        <Route exact path="/Home">
          <Home />
        </Route>

        <Route exact path="/manga-description">
          < Webtoon/>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          404
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;


