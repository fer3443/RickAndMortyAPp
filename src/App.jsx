import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import EpisodePage from './pages/EpisodePage';
import LocationPage from './pages/LocationPage';
import ErrorPage from './pages/ErrorPage';
import NavigationBar from './components/navigationBar/NavigationBar';
import AboutPage from './pages/AboutPage';

import './App.css'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/characters' element={<CharacterPage/>}/>
        <Route path='/episodes' element={<EpisodePage/>}/>
        <Route path='/locations' element={<LocationPage/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
