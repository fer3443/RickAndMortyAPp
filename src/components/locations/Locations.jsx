import React, { useContext, useEffect, useState } from "react";

import { Loader } from "../loader/Loader";
import { LoaderProvider } from "../../context/LoaderContext";
import { getLocationsPage } from "../../services/ApiService";
import { LocationsTable } from "../locationsTable/LocationsTable";
import { Footer } from "../footer/Footer";

import "../locations/Locations.css";
export const Locations = () => {
  const { loading, setLoading } = useContext(LoaderProvider);
  const [location, setLocation] = useState([]);
  const [page, setPage] = useState(1);

  function nextPage() {
    if (page == 7) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }
  function prevPage() {
    if (page == 1) {
      setPage(7);
    } else {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    setLoading(true);
    getLocationsPage(page)
      .then(({ results }) => setLocation(results))
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
        <div className="locationsContainer">
          <header className="locationsHeader">
            <h1>Ubicaciones de la serie</h1>
            <h3>
              Aquí encontraras la lista completa de todos los ubicaciones de la
              serie con sus detalles!
            </h3>
          </header>
          <div className="locationsPageButtons">
            <button className="buttonYw" onClick={prevPage}>
              anterior
            </button>
            <button className="buttonYw" onClick={nextPage}>
              siguiente
            </button>
          </div>
          <section className="locationGridContainer">
            <LocationsTable location={location} />
          </section>
          <div className="locationsPageButtons">
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
