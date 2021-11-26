import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Slider from "../components/Slider";

import Header from "components/Header";

// Exercices
import FirstComponentExercice from 'exercices/FirstComponent'
import StylingComponentsExercice from 'exercices/StylingComponents'
import ContextsExercice from 'exercices/Contexts'

function App() {
  return (
    <div>
    <Slider/>
  </div>
    
  );
}

export default App;
