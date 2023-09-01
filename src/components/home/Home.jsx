import React, { useState } from "react";
import { Footer } from "../footer/Footer";
import { HeaderApp } from "../header/HeaderApp";

import "../home/Home.css";
import CarrousellH from "../carrousel/CarrousellH";
import { Loader } from "../loader/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="homeContainer">
          <HeaderApp />
          <section className="homeSection">
            <CarrousellH />
            <h1>Rick and Morty App.</h1>
            <h5>
              ¡Bienvenidos al portal definitivo para todos los fanáticos de la
              aclamada serie "Rick and Morty"! Sumérgete en un universo lleno de
              aventuras interdimensionales, humor ácido y personajes excéntricos
              que te harán cuestionar la realidad misma.
            </h5>
          </section>
          <section></section>
          <Footer />
        </div>
      )}
    </>
  );
}
