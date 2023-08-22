import React, { useContext, useEffect, useState } from "react";

import { Loader } from "../loader/Loader";
import { LoaderProvider } from "../../context/LoaderContext";
import { getLocationsPage } from "../../services/ApiService";
import { LocationsTable } from "../locationsTable/LocationsTable";

import '../locations/Locations.css'
export const Locations = () => {

	const { loading, setLoading } = useContext(LoaderProvider);
	const [location, setLocation] = useState([]);
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
		<>{loading ? <Loader /> : <div className="episodesContainer">
		<header className="episodesHeader">
					<h1>Ubicaciones de la serie</h1>
					<h3>
						Aquí encontraras la lista completa de todos los ubicaciones de la
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
					<LocationsTable location={location}/>
				</section>
				<div className="episodesPageButtons">
					<button className="buttonYw" onClick={prevPage}>
						anterior
					</button>
					<button className="buttonYw" onClick={nextPage}>
						siguiente
					</button>
				</div>
		</div>}</>
  )
}
