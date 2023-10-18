import React, { useState } from "react";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";
import logoHome from "../../assets/logoHome.png";
import imgCharacters from "../../assets/imgCharacters.jpg";
import imgEpisodes from "../../assets/imgEpisodes.jpeg";
import imgLocations2 from "../../assets/imgLocations2.jpg";
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
          <motion.div
            initial={{scale: 0}}
            animate={{ x: 0, scale:1  }}
            transition={{ type: "spring", stiffness: 100}}
          >
            <img src={logoHome} alt="" className="logoHome" />
          </motion.div>

          <section className="homeSection">
            <h1>Rick and Morty App.</h1>
            <h6>
              ¡Bienvenidos al portal definitivo para todos los fanáticos de la
              aclamada serie "Rick and Morty"! Sumérgete en un universo lleno de
              aventuras interdimensionales, humor ácido y personajes excéntricos
              que te harán cuestionar la realidad misma.
            </h6>
          </section>
          <section className="cardSection">
            <header className="cardSection-Header">
              <h2>Secciones</h2>
            </header>
            <div className="cardSection-section">
              <div className="cardCharacter">
                <figure>
                  <img src={imgCharacters} alt="" />
                </figure>
                <div className="cardParraph">
                  <h5>Personajes</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis pariatur fuga optio! In quas unde quae natus aut id
                    ducimus!
                  </p>
                </div>
                <div className="seeMore">
                  <Link to={"/characters"} className="cardSectionLinks">
                    Ver más!
                  </Link>
                </div>
              </div>
              <div className="cardEpisode">
                <figure>
                  <img src={imgEpisodes} alt="" />
                </figure>
                <div className="cardParraph">
                  <h5>Episodios</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis pariatur fuga optio! In quas unde quae natus aut id
                    ducimus!
                  </p>
                </div>
                <div className="seeMore">
                  <Link to={"/episodes"} className="cardSectionLinks">
                    Ver más!
                  </Link>
                </div>
              </div>
              <div className="cardLocation">
                <figure>
                  <img src={imgLocations2} alt="" />
                </figure>
                <div className="cardParraph">
                  <h5>Ubicaciones</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis pariatur fuga optio! In quas unde quae natus aut id
                    ducimus!
                  </p>
                </div>
                <div className="seeMore">
                  <Link to={"/locations"} className="cardSectionLinks">
                    Ver más!
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="sectionDivisor"></section>
          <section className="sectionTrailers">
            <header className="headerTrailers">
              <h2>Trailers de temporadas</h2>
            </header>
            <div className="trailersContainer">
              <div className="trailersBox">
                <h6>Temporada 1</h6>
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/BFTSrbB2wII?si=2U5TmE94d5sCyXUq"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="trailersBox">
                <h6>Temporada 2</h6>
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/_IZfO_LfK5Q?si=DIrdyepxul1GhFC-"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="trailersBox">
                <h6>Temporada 3</h6>
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/rLyOul8kau0?si=Vxi5ygw1SfncvX71"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="trailersBox">
                <h6>Temporada 4</h6>
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/hl1U0bxTHbY?si=1D03sntsnh1v2cov"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="trailersBox">
                <h6>Temporada 5</h6>
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/qbHYYXj2gMc?si=2P5LteNi5DQxsko4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="trailersBox">
                <h6>Temporada 6</h6>
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/P9WZhGMlDBE?si=p5_GOQzge-zhr9Yh"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="trailersBox">
                <h6>Temporada 7</h6>
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/58-gZTQ36LU?si=MASKKMXkKCMlr_v4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}
