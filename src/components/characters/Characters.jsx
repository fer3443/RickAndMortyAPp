import React from "react";
import "../characters/Characters.css";
import { CharactersCards } from "../charactersCards/CharactersCards";

export const Characters = () => {
  return (
    <div className="characterContainer">
      <header className="characterHeader">
        <h1>Personajes de la serie</h1>
        <h3>
          Aquí encontraras la lista completa de todos los personajes de la serie
          con sus detalles!
        </h3>
      </header>
      <section className="cardsContainer">
				<CharactersCards />
			</section>
    </div>
  );
};
