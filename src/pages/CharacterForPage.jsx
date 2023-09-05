import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllCharactersPage } from "../services/ApiService";

export const CharacterForPage = () => {
	const { page } = useParams();

	useEffect(() => {
		getAllCharactersPage(page)
		.then(res => console.log(res))
		.catch(err => console.log(err))
	}, [])
	
  return (
    <h1>Character For Page</h1>
  );
};
