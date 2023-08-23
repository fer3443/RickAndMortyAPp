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
		setLoading(true)
    getCharacterById(id)
      .then((res) => {
        setCharacter(res);
      })
      .catch((err) => console.log(err))
			.finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
			})
  }, []);

  return (
		<>
		{ loading ? (<Loader/>) : <div className="detailsContainer">
			<div className="detailCard">
				<figure>
					<img src={character.image} alt="" />
					<div className="capa">
						<div className="detailHead">
						<h4>{character.name}</h4>
						<p>Especifaciones</p>
						</div>
					</div>
				</figure>
			</div>
			</div>}
		</>
	);
};
