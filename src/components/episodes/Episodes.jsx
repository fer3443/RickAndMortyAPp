import React, { useContext, useEffect, useState } from "react";

import { Loader } from "../loader/Loader";
import { Footer } from "../footer/Footer";
import { LoaderProvider } from "../../context/LoaderContext";
import { getEpisodesPage } from "../../services/ApiService";
import { EpisodesTable } from "../episodesTable/EpisodesTable";

import "../episodes/Episodes.css";

export const Episodes = () => {
  const { loading, setLoading } = useContext(LoaderProvider);
  const [episode, setEpisode] = useState([]);
  const [page, setPage] = useState(1);

  function nextPage() {
    if (page == 3) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }
  function prevPage() {
    if (page == 1) {
      setPage(3);
    } else {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    setLoading(true);
    getEpisodesPage(page)
      .then(({ results }) => setEpisode(results))
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
        <div className="episodesContainer">
          <header className="episodesHeader">
            <h1>Episodios de la serie</h1>
            <h3>
              Aquí encontraras la lista completa de todos los episodios de la
              serie con sus detalles!
            </h3>
          </header>
          <div className="episodesPageButtons">
            <button className="buttonYw" onClick={prevPage}>
              anterior
            </button>
            <button className="buttonYw" onClick={nextPage}>
              siguiente
            </button>
          </div>
          <section className="episodeGridContainer">
            <EpisodesTable episode={episode} />
          </section>
          <div className="episodesPageButtons">
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
