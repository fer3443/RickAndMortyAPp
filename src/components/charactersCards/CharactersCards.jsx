import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../charactersCards/CharactersCards.css";
export const CharactersCards = ({ character }) => {
  return (
    <>
      {character.map((item, index) => {
        return (
          <motion.div
            initial={{ x: 0, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            key={index}
          >
            <div className="borderColor">
              <div className="cardContainer">
                <figure>
                  <img
                    className="cardImage"
                    src={item.image}
                    alt={item.name}
                    title={item.name}
                  />
                </figure>
                  <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0, duration: 0.9}}
                  >
                <div className="cardBody">
                <h5>{item.name}</h5>
                    <p>Estado: {item.status}</p>
                    <p>Genero: {item.gender}</p>
                    <p>Especie: {item.species}</p>
                   
                  <Link to={`/characters/${item.id}`} className="buttonYw">
                    ver mas
                  </Link>
                </div>
                  </motion.div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
