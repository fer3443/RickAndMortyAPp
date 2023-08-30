import React, { useContext, useEffect, useState } from "react";

import { Loader } from "../loader/Loader";
import { LoaderProvider } from "../../context/LoaderContext";
import { getLocationsPage } from "../../services/ApiService";
import { LocationsTable } from "../locationsTable/LocationsTable";
import { Footer } from "../footer/Footer";

import "../locations/Locations.css";
import { Pagination } from "../pagination/Pagination";
export const Locations = () => {
  const { loading, setLoading } = useContext(LoaderProvider);
  const [location, setLocation] = useState([]);
  const pageMin = 1;
  const pageMax = 7;
  const [page, setPage] = useState(1);

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
          <Pagination page={page} setPage={setPage} pageMin={pageMin} pageMax={pageMax}/>
          <section className="locationGridContainer">
            <LocationsTable location={location} />
          </section>
          <Pagination page={page} setPage={setPage} pageMin={pageMin} pageMax={pageMax}/>
					<Footer/>
        </div>
      )}
    </>
  );
};
