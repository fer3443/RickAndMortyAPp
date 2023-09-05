import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

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

  function handleNavigation(){
    navigate("/characters")
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


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="detailsContainer">
          <HeaderApp />
          <div className="detailsBox">
            <button onClick={handleNavigation} className="btnBack">volver</button>
          </div>
          <div className="detailsCard">
            <motion.div
              animate={{ x: 0, scale: [0,1,0.9,1] }}
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
              {origin ? (
                <p>Origen: {origin.name}</p>
              ) : (
                <p>Origen: Desconocido</p>
              )}
              <p>Creacion del personaje: {character.created}</p>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
