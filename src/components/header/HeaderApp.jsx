import React from "react";
import { Link } from "react-router-dom";

import "../header/HeaderApp.css";
export const HeaderApp = () => {
  return (
    <header className="headerAppContainer">
      <Link className="headerAppLink" to={"/"}>
          <img src="src/assets/R&M-logo.png" alt="" />
        </Link>
    </header>
  );
};
