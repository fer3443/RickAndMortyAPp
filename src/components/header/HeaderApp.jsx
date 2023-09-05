import React from "react";
import { Link } from "react-router-dom";
import rickLogo from '../../assets/RyM-logo.png';

import "../header/HeaderApp.css";
export const HeaderApp = () => {
  return (
    <header className="headerAppContainer">
      <Link className="headerAppLink" to={"/"}>
          <img src={rickLogo} alt="" />
        </Link>
    </header>
  );
};
