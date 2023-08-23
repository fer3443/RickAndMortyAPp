import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Loader } from "../loader/Loader";
import { LoaderProvider } from "../../context/LoaderContext";

import { getCharacterById } from "../../services/ApiService";

import "../charactersDetails/CharactersDetails.css";

export const CharactersDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const { loading, setLoading } = useContext(LoaderProvider);

  useEffect(() => {
    setLoading(true);
    getCharacterById(id)
      .then((res) => {
        setCharacter(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, []);
	const {origin} = character
	console.log(character.location)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="detailsContainer">
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
        </div>
      )}
    </>
  );
};
