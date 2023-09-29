import React, { useContext, useEffect, useState } from "react";

import { Loader } from "../loader/Loader";
import { Footer } from "../footer/Footer";
import { LoaderProvider } from "../../context/LoaderContext";

import { CharactersCards } from "../charactersCards/CharactersCards";
import { getAllCharactersPage } from "../../services/ApiService";

import { Pagination } from "../pagination/Pagination";

import "../characters/Characters.css";
export const Characters = () => {
  const { loading, setLoading } = useContext(LoaderProvider);
  const [character, setCharacter] = useState([]);
  const pageMin = 1;
  const pageMax = 42;
  const [page, setPage] = useState(sessionStorage.getItem("page"));
    if(page ==null){//para no romper lectura de funcion toString en componente Pagination
      setPage(pageMin)
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
          <Pagination
            page={page}
            setPage={setPage}
            pageMin={pageMin}
            pageMax={pageMax}
          />
          <section className="cardsContainer">
            <CharactersCards character={character} />
          </section>
          <Pagination
            page={page}
            setPage={setPage}
            pageMin={pageMin}
            pageMax={pageMax}
          />
          <Footer />
        </div>
      )}
    </>
  );
};
