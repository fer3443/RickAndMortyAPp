import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Accordion from "react-bootstrap/Accordion";

import { motion } from "framer-motion";

import { CharacterDetailEpisodes } from "../charactersDetailEpisodes/CharacterDetailEpisodes";
import { Loader } from "../loader/Loader";
import { Footer } from "../footer/Footer";
import { LoaderProvider } from "../../context/LoaderContext";

import { getCharacterById } from "../../services/ApiService";

import "../charactersDetails/CharactersDetails.css";

export const CharactersDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  //para almacenar el array de episodios
  const { loading, setLoading } = useContext(LoaderProvider);
  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/characters");
  }

  useEffect(() => {
    setLoading(true);
    getCharacterById(id)
      .then((res) => {
        setCharacter(res);
        setEpisodes(res.episode);
        setLoading(false);
      })
      .catch((err) => console.log(err))
  }, []);
  function formatedDate(item){
    const fecha = new Date(item).toLocaleString()
    return fecha
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="detailsContainer">
          <header className="headerCharacterDetail">
            <h2>Más informacion sobre {character.name}</h2>
          </header>
          <div className="detailsBox">
            <button onClick={handleNavigation} className="btnBack">
              volver
            </button>
          </div>
            <div className="detailsCard">
              <motion.div
                animate={{ x: 0, scale: [0, 1, 0.9, 1] }}
                transition={{ delay: 0.5 }}
              >
                <figure>
                  <img className="detailImg" src={character.image} alt="" />
                </figure>
              </motion.div>
              <div className="detailsBody">
                <h4>{character.name}</h4>
                <p>
                  <span>Estado:</span> {character.status}
                </p>
                <p>
                  <span>Genero:</span> {character.gender}
                </p>
                <p>
                  <span>Especie:</span> {character.species}
                </p>
                {character.origin ? (
                  <p>
                    <span>Origen:</span> {character.origin.name}
                  </p>
                ) : (
                  <p>Origen: Desconocido</p>
                )}
                <p className="detailCreation">
                  <span>Creado:</span> {formatedDate(character.created)}
                </p>
                {character.location ? (
                  <p>
                    <span>Ubicación:</span> {character.location.name}
                  </p>
                ) : (
                  <p>Ubicación: Desconocido</p>
                )}
                <p>
                  <span>ID del personaje:</span> {character.id}
                </p>
              </div>
              <Accordion data-bs-theme="dark">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="detailAccordion">
                    Episodios en los que participa:
                  </Accordion.Header>
                  <Accordion.Body>
                    <CharacterDetailEpisodes episodes={episodes} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          <Footer />
        </div>
      )}
    </>
  );
};
