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
        <main className="mainContainer">
          <section className="home section">
            <div className="homeContainer grid container">
              <div className="home-logo">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ x: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <img src={logoHome} alt="" className="img-Logo" />
                </motion.div>
              </div>
              <h1 className="homeTitle">
                Rick and Morty <span>App.</span>
              </h1>
              <h2 className="homeSubtitle">
                ¡Bienvenidos al portal definitivo para todos los fanáticos de la
                aclamada serie "Rick and Morty"! Sumérgete en un universo lleno
                de aventuras interdimensionales, humor ácido y personajes
                excéntricos que te harán cuestionar la realidad misma.
              </h2>
            </div>
          </section>
          <section className="cardSection section">
            <div className="cardSectionContainer grid container">
              <div className="card-section-content">
                <div className="box-title">
                  <h2 className="card-title">Secciones</h2>
                </div>
                <div className="card-box grid">
                  <div className="cardCharacter">
                    <img src={imgCharacters} alt="" />
                    <div className="cardParraph">
                      <h5>Personajes</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis pariatur fuga optio! In quas unde quae natus aut
                        id ducimus!
                      </p>
                    </div>
                    <div className="seeMore">
                      <Link to={"/characters"} className="cardSectionLinks">
                        Ver más!
                      </Link>
                    </div>
                  </div>
                  <div className="cardEpisode">
                    <img src={imgEpisodes} alt="" />
                    <div className="cardParraph">
                      <h5>Episodios</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis pariatur fuga optio! In quas unde quae natus aut
                        id ducimus!
                      </p>
                    </div>
                    <div className="seeMore">
                      <Link to={"/episodes"} className="cardSectionLinks">
                        Ver más!
                      </Link>
                    </div>
                  </div>
                  <div className="cardLocation">
                    <img src={imgLocations2} alt="" />
                    <div className="cardParraph">
                      <h5>Ubicaciones</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis pariatur fuga optio! In quas unde quae natus aut
                        id ducimus!
                      </p>
                    </div>
                    <div className="seeMore">
                      <Link to={"/locations"} className="cardSectionLinks">
                        Ver más!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sectionDivisor"></section>
          <section className="trailers section">
            <div className="trailersContainer container grid">
              <div className="box-title">
                <h2 className="trailer-title">Trailers de temporadas</h2>
              </div>
              <div className="trailers-content">
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
            </div>
          </section>
          <Footer />
        </main>
      )}
    </>
  );
}
