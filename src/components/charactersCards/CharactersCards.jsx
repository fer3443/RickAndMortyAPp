import React from "react";

import { motion } from "framer-motion";

import "../charactersCards/CharactersCards.css";

export const CharactersCards = ({character}) => {
  
  return (
    <>
      {character.map((item, index) => {
        return (
          <motion.div animate={{x:0, scale: 1 }} initial={{ x: 200, scale: 0 }} key={index}>
            <div className="cardContainer">
              <figure>
                <img className="cardImage" src={item.image} alt="" />
              </figure>
              <div className="cardBody">
                <h4 className="cardName">{item.name}</h4>
                <p>Estado: {item.status}</p>
                <p>Especie: {item.species}</p>
                <p>Genero: {item.gender}</p>
                <button>ver mas</button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
