import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterById, getLocationById } from "../../services/ApiService";
import { LoaderProvider } from "../../context/LoaderContext";
import { Loader } from "../loader/Loader";
import {Footer} from "../footer/Footer"
import { LocationsDetailsCharacters } from "./LocationsDetailsCharacters";

import "../locationsDetails/LocationsDetails.css";
export const LocationsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const { loading, setLoading } = useContext(LoaderProvider);

  function handleNavigation() {
    navigate("/locations");
  }
  useEffect(() => {
    setLoading(true);
    getLocationById(id)
      .then((res) => {
        setLocation(res);
        setPersonajes(res.residents);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="containerDetailGral">
          <section className="locationsDetailContainer">
          <h1>{location.name}</h1>
          <button onClick={handleNavigation} className="buttonYw">Volver</button>
          <div className="locationBody">
            <h3>Personajes observados en esta ubicación:</h3>
            <p>cantidad de personajes: {personajes.length}</p>
            {personajes.length == 0 ? (
              <h4>No hay pesonajes para mostrar</h4>
            ) : (
              <LocationsDetailsCharacters personajes={personajes} />
            )}
          </div>
        </section>
        <Footer/>
        </div>
      )}
    </>
  );
};
