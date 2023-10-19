import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";
import EpisodePage from "./pages/EpisodePage";
import LocationPage from "./pages/LocationPage";
import ErrorPage from "./pages/ErrorPage";
import NavigationBar from "./components/navigationBar/NavigationBar";
import AboutPage from "./pages/AboutPage";
import CharacterPageDetail from "./pages/CharacterPageDetail";
import { LoaderContext } from "./context/LoaderContext";

import LocationsPageDetail from "./pages/LocationsPageDetail";
import metaRaM from "./assets/metaRaM.jpg"

import "./App.css";
import { Helmet } from "react-helmet";


function App() {
  return (
    <>
      <BrowserRouter>
      <Helmet>
      <title>Rick and Morty app</title>
      <meta name="description" content="Informacion de la serie Rick and Morty" />
      {/* Sitio dedicado a la serie Rick And Morty, con el consumo de api y practica en react. =)  */}
      <meta property="og:image" content={metaRaM} />
      <meta property="og:image:width" content="150" />
      <meta property="og:image:height" content="170" />
    </Helmet>
        <LoaderContext>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharacterPage />} />
            <Route path="/characters/:id" element={<CharacterPageDetail/>}/>
            <Route path="/episodes" element={<EpisodePage />} />
            <Route path="/locations" element={<LocationPage />} />
            <Route path="/locations/:id" element={<LocationsPageDetail/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </LoaderContext>
      </BrowserRouter>
    </>
  );
}

export default App;
