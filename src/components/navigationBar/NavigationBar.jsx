import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../navigationBar/NavigationBar.css";

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="navbarContainer">
        <div className="boxBtnBurger">
          <button
            className="btnBurger"
            onClick={() => {
              setShow(!show);
            }}
          >
            <box-icon name="menu" color="#f7ce18" size="md"></box-icon>
          </button>
        </div>
      <nav className={show ? " nav hidden" : "nav"}>
        <div className={show ? "boxlink hidden" : "boxLink"}>
          <box-icon
            name="home-alt-2"
            color="#f7ce18"
            animation="flashing-hover"
            size="md"
          ></box-icon>
          <Link to={"/"} className={show ? "navLink hidden" : "navLink"}>
            Inicio
          </Link>
        </div>
        <div className={show ? "boxlink hidden" : "boxLink"}>
          <box-icon
            name="user-pin"
            color="#f7ce18"
            animation="flashing-hover"
            size="md"
          ></box-icon>
          <Link
            to={"/characters"}
            className={show ? "navLink hidden" : "navLink"}
          >
            Personajes
          </Link>
        </div>
        <div className={show ? "boxlink hidden" : "boxLink"}>
          <box-icon
            name="tv"
            color="#f7ce18"
            animation="flashing-hover"
            size="md"
          ></box-icon>
          <Link
            to={"/episodes"}
            className={show ? "navLink hidden" : "navLink"}
          >
            Episodios
          </Link>
        </div>
        <div className={show ? "boxlink hidden" : "boxLink"}>
          <box-icon
            name="current-location"
            color="#f7ce18"
            animation="flashing-hover"
            size="md"
          ></box-icon>
          <Link
            to={"/locations"}
            className={show ? "navLink hidden" : "navLink"}
          >
            Ubicaciones
          </Link>
        </div>
        <div className={show ? "boxlink hidden" : "boxLink"}>
          <box-icon
            name="code"
            color="#f7ce18"
            animation="flashing-hover"
            size="md"
          ></box-icon>
          <Link to={"/about"} className={show ? "navLink hidden" : "navLink"}>
            Acerca de
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
