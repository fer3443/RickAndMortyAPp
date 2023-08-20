import React, { useEffect, useState } from "react";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

import { getAllCharacters } from "../../services/ApiService";
import { ButtonYellow } from "../buttons/ButtonsVar";

import "../charactersCards/CharactersCards.css";

export const CharactersCards = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then(({ results }) => {
        console.log(results);
        setCharacter(results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {character.map((item, index) => {
        return (
          <div className="cardContainer" key={index}>
            <figure>
              <img className="cardImage" src={item.image} alt="" />
            </figure>
            <div className="cardBody">
              <h4 className="cardName">{item.name}</h4>
              <p>Estado: {item.status}</p>
              <p>Especie: {item.species}</p>
              <p>Genero: {item.gender}</p>
              <div className="cardFooter">
                <ButtonYellow/>		
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
