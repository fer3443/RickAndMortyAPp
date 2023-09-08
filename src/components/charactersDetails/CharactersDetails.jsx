import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Accordion from 'react-bootstrap/Accordion';

import { motion } from "framer-motion";

import { HeaderApp } from "../header/HeaderApp";
import { Loader } from "../loader/Loader";
import { Footer } from "../footer/Footer";
import { LoaderProvider } from "../../context/LoaderContext";

import { getCharacterById } from "../../services/ApiService";

import "../charactersDetails/CharactersDetails.css";

export const CharactersDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
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
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, []);

  console.log(character.episode)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="detailsContainer">
          <HeaderApp />
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
              <p>Estado: {character.status}</p>
              <p>Genero: {character.gender}</p>
              <p>Especie: {character.species}</p>
              {character.origin ? (
                <p>Origen: {character.origin.name}</p>
              ) : (
                <p>Origen: Desconocido</p>
              )}
              <p className="detailCreation">Creacion del personaje: <span>{character.created}</span></p>
            </div>
            <Accordion data-bs-theme="dark">
      <Accordion.Item eventKey="0" >
        <Accordion.Header className="detailAccordion">Episodios en los que participa:</Accordion.Header>
        <Accordion.Body>
         <p>Numero de episodios: {character.episode.length}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header  >Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
