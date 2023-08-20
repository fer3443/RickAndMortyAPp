import React from "react";

import "../home/Home.css";
import CarrousellH from "../carrousel/CarrousellH";

export default function Home() {
  return (
    <div className="homeContainer">
      <section className="homeSection">
      <CarrousellH/>
        <h1>Rick and Morty App.</h1>
        <h5>
          ¡Bienvenidos al portal definitivo para todos los fanáticos de la
          aclamada serie "Rick and Morty"! Sumérgete en un universo lleno de
          aventuras interdimensionales, humor ácido y personajes excéntricos que
          te harán cuestionar la realidad misma.
        </h5>
    </section>
    </div>

  );
}
