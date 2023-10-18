import React, { useState } from "react";
import { Link } from "react-router-dom";
import rickLogo from '../../assets/RyM-logo.png';

import "../navigationBar/NavigationBar.css";

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  
  const [ scrolling, setScrolling] = useState(false);

  function handleBg(){
    if(window.scrollY >= 10){
      setScrolling(true)
    }else{
      setScrolling(false)
    }
  }
  window.addEventListener("scroll", handleBg)
  return (
    <header className={scrolling ? "navbarContainer bgDark" : "navbarContainer"}>
        <div className="boxBtnBurger">
          <button
            className="btnBurger"
            onClick={() => {
              setShow(!show)
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
          <Link to={"/"} className={"navLink"} onClick={() => {
              setShow(!show)
            }}>
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
            className={"navLink"} onClick={() => {
              setShow(!show)
            }}
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
            className={"navLink"} onClick={() => {
              setShow(!show)
            }}
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
            className={"navLink"} onClick={() => {
              setShow(!show)
            }}
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
          <Link to={"/about"} className={"navLink"} onClick={() => {
              setShow(!show)
            }}>
            Acerca de
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
