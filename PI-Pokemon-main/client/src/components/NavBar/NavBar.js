import React from "react";
// import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (    
    <div className="">
      {/* <div><Link to="/">Home</Link></div> */}
      <div><Link to="/pokemon">Pokemons</Link></div>     
    </div>
  );
}

export default NavBar;