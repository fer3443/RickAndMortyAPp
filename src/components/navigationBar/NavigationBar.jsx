import React from "react";
import { Link } from "react-router-dom";

import "../navigationBar/NavigationBar.css";

const NavigationBar = () => {
  return (
    <header>
      <nav>
        <div className="boxTitle">
          <h1>Rick and Morty App</h1>
        </div>
        <div className="boxLink">
          <box-icon name="home-alt-2" color="#7F89B0" size="md"></box-icon>
          <Link to={"/"} className="navLink">Inicio</Link>
        </div>
        <div className="boxLink">
          <box-icon name="user-pin" color="#7F89B0" size="md"></box-icon>
          <Link to={"/characters"} className="navLink">Personajes</Link>
        </div>
        <div className="boxLink">
          <box-icon name="tv" color="#7F89B0" size="md"></box-icon>
          <Link to={"/episodes"} className="navLink">Episodios</Link>
        </div>
        <div className="boxLink">
          <box-icon name="current-location" color="#7F89B0" size="md"></box-icon>
          <Link to={"/locations"} className="navLink">Ubicaciones</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
