// import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Pokemons from "./components/Pokemons/Pokemons.js";
// import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar.js";

function App() {
  return (
    <BrowserRouter>
        {/* <Route path="/" component={NavBar}></Route> */}
      {/* <Route exact path="/" component={Home}></Route> */}
      <Route exact path="/pokemon" component={Pokemons}></Route>
         
    </BrowserRouter>
  );
}

export default App;
