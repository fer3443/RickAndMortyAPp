import React, { useContext, useEffect, useState } from "react";

import { Loader } from "../loader/Loader";
import { Footer } from "../footer/Footer";
import { LoaderProvider } from "../../context/LoaderContext";

import { CharactersCards } from "../charactersCards/CharactersCards";
import { getAllCharactersPage } from "../../services/ApiService";

import "../characters/Characters.css";

export const Characters = () => {
  const { loading, setLoading } = useContext(LoaderProvider);
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  
  function nextPage() {
    if (page == 42) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }
  function prevPage() {
    if (page == 1) {
      setPage(42);
    } else {
      setPage(page - 1);
    }
  }
  useEffect(() => {
    setLoading(true);
    getAllCharactersPage(page)
      .then(({ results }) => {
        setCharacter(results);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, [page]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="characterContainer">
          <header className="characterHeader">
            <h1>Personajes de la serie</h1>
            <h3>
              Aquí encontraras la lista completa de todos los personajes de la
              serie con sus detalles!
            </h3>
          </header>
          <div className="characterPageButtons">
            <button className="buttonYw" onClick={prevPage}>
              anterior
            </button>
            <button className="buttonYw" onClick={nextPage}>
              siguiente
            </button>
          </div>
          <section className="cardsContainer">
            <CharactersCards character={character} />
          </section>
          <div className="characterPageButtons">
            <button className="buttonYw" onClick={prevPage}>
              anterior
            </button>
            <button className="buttonYw" onClick={nextPage}>
              siguiente
            </button>
          </div>
          <Footer/>
        </div>
      )}
    </>
  );
};
