import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Loader } from "../loader/Loader";
import { Footer } from "../footer/Footer";
import { LoaderProvider } from "../../context/LoaderContext";

import { getCharacterById } from "../../services/ApiService";

import "../charactersDetails/CharactersDetails.css";

export const CharactersDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const { loading, setLoading } = useContext(LoaderProvider);

  useEffect(() => {
    
    getCharacterById(id)
      .then((res) => {
        setCharacter(res);
      })
      .catch((err) => console.log(err))
  }, []);
  
	const {origin} = character
	console.log(character.location)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="detailsContainer">
          <div className="detailsBox">
          <button className="btnBack">volver</button>
          </div>
         <div className="detailsCard">
				 <figure>
            <img className="detailImg" src={character.image} alt="" />
          </figure>
          <div className="detailsBody">
            <h4>{character.name}</h4>
            <p>Estado: {character.status}</p>
            <p>Genero: {character.gender}</p>
            <p>Especie: {character.species}</p>
						{
							origin ? (<p>Origen: {origin.name}</p>) : <p>Origen: Desconocido</p>
						}
						<p>Creacion del personaje: {character.created}</p>
          </div>
				 </div>
         <Footer/>
        </div>
      )}
    </>
  );
};
