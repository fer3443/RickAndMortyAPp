import React, { useContext, useEffect, useState } from "react";

import { Loader } from "../loader/Loader";
import { HeaderApp } from "../header/HeaderApp";
import { Footer } from "../footer/Footer";
import { LoaderProvider } from "../../context/LoaderContext";
import { getEpisodesPage } from "../../services/ApiService";
import { EpisodesTable } from "../episodesTable/EpisodesTable";
import { Pagination } from "../pagination/Pagination";

import "../episodes/Episodes.css";

export const Episodes = () => {
  const { loading, setLoading } = useContext(LoaderProvider);
  const [episode, setEpisode] = useState([]);
  const pageMin = 1;
  const pageMax = 3;
  const [page, setPage] = useState(sessionStorage.getItem("page"));
  if(page == null || page > pageMax){
    setPage(pageMin)
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
          <HeaderApp/>
          <header className="episodesHeader">
            <h1>Episodios de la serie</h1>
            <h3>
              Aquí encontraras la lista completa de todos los episodios de la
              serie con sus detalles!
            </h3>
          </header>
          <Pagination page={page} setPage={setPage} pageMin={pageMin} pageMax={pageMax}/>
          <section className="episodeGridContainer">
            <EpisodesTable episode={episode} />
          </section>
          <Pagination page={page} setPage={setPage} pageMin={pageMin} pageMax={pageMax}/>
          <Footer/>
        </div>
      )}
    </>
  );
};
