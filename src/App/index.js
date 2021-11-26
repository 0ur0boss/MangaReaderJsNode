import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Slider from "../components/Slider";

import Header from "components/Header";

// Exercices
import FirstComponentExercice from 'exercices/FirstComponent'
import StylingComponentsExercice from 'exercices/StylingComponents'
import ContextsExercice from 'exercices/Contexts'

// Pages
import Home from 'pages/Home'

function App() {
  return (
   
    <BrowserRouter>
     <div>
    <Slider/>
  </div>
    
      <Header />
      
      <Switch>

        <Route exact path="/Home">
          <Home />
        </Route>

        <Route exact path="/first-component">
          <FirstComponentExercice />
        </Route>

        <Route exact path="/styling-components">
          <StylingComponentsExercice />
        </Route>

        <Route exact path="/contexts">
          <ContextsExercice />
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
