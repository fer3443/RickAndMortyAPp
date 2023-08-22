import React from "react";
import { motion } from "framer-motion";
import "../charactersCards/CharactersCards.css";
export const CharactersCards = ({character}) => {
  
  return (
    <>
      {
			character.map((item, index) => {
        return (
					<motion.div initial={{x:200, scale:0}} animate={{x:0, scale: 1}}>
						<div className="cardContainer" key={index}>
            <figure>
              <img className="cardImage" src={item.image} alt="" />
            </figure>
            <div className="cardBody">
              <h4>{item.name}</h4>
              <p>Estado: {item.status}</p>
              <p>Genero: {item.gender}</p>
              <p>Especie: {item.species}</p>
              <button className="buttonYw">ver mas</button>
            </div>
          </div>
					</motion.div>
          
        );
      })}
    </>
  );
};
