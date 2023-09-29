import React, { useState } from "react";
import { Link } from "react-router-dom";
import rickLogo from '../../assets/RyM-logo.png';

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
        <div>
        <img className="imgLogo" src={rickLogo} alt="" />
        </div>
      <nav className={show ? " nav hidden" : "nav"}>
        <div className={"boxLink"}>
          <box-icon
            name="home-alt-2"
            color="#f7ce18"
            animation="flashing-hover"
            size="md"
          ></box-icon>
          <Link to={"/"} className={"navLink"}>
            Inicio
          </Link>
        </div>
        <div className={"boxLink"}>
          <box-icon
            name="user-pin"
            color="#f7ce18"
            animation="flashing-hover"
            size="md"
          ></box-icon>
          <Link
            to={"/characters"}
            className={"navLink"}
          >
            Personajes
          </Link>
        </div>
        <div className={"boxLink"}>
          <box-icon
            name="tv"
            color="#f7ce18"
            animation="flashing-hover"
            size="md"
          ></box-icon>
          <Link
            to={"/episodes"}
            className={"navLink"}
          >
            Episodios
          </Link>
        </div>
        <div className={"boxLink"}>
          <box-icon
            name="current-location"
            color="#f7ce18"
            animation="flashing-hover"
            size="md"
          ></box-icon>
          <Link
            to={"/locations"}
            className={"navLink"}
          >
            Ubicaciones
          </Link>
        </div>
        <div className={"boxLink"}>
          <box-icon
            name="code"
            color="#f7ce18"
            animation="flashing-hover"
            size="md"
          ></box-icon>
          <Link to={"/about"} className={"navLink"}>
            Acerca de
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
