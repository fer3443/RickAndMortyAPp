import React, { useState } from "react";
import { Footer } from "../footer/Footer";
import logoHome from "../../assets/logoHome.png"
import { Loader } from "../loader/Loader";

import "../home/Home.css";


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
          <img src={logoHome} alt=""  className="logoHome"/>
          <section className="homeSection">
            <h1>Rick and Morty App.</h1>
            <h6>
              ¡Bienvenidos al portal definitivo para todos los fanáticos de la
              aclamada serie "Rick and Morty"! Sumérgete en un universo lleno de
              aventuras interdimensionales, humor ácido y personajes excéntricos
              que te harán cuestionar la realidad misma.
            </h6>
          </section>
          <section className="trailersContainer">
            <h4>Mirá un adelanto de cada una de las temporadas!</h4>
            <div className="trailersSection">
          {/* <iframe width="450" height="315" src="https://www.youtube.com/embed/BFTSrbB2wII?si=VAQq2mRN_kG6-IJm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="450" height="315" src="https://www.youtube.com/embed/_IZfO_LfK5Q?si=DS2P6rXSgyFz08iE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="450" height="315" src="https://www.youtube.com/embed/rLyOul8kau0?si=6pKLASls3pMm8UqD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="450" height="315" src="https://www.youtube.com/embed/hl1U0bxTHbY?si=D7xrED_ezdSFYh6m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="450" height="315" src="https://www.youtube.com/embed/fqbm1n5w2ls?si=X-PsWDovJ0tAtXJ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="450" height="315" src="https://www.youtube.com/embed/P9WZhGMlDBE?si=Zu1ZyHM6i-hRVdUJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="450" height="315" src="https://www.youtube.com/embed/IRUBwgy5T2Q?si=77Imfdr2IaytC7oI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
          </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}
