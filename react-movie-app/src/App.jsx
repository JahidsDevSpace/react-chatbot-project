import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FavouritesPage from './pages/FavouritesPage'
import Header from "./components/Header";
import { MovieProvider } from './contexts/MovieContext';
import './App.css'

function App() {
  return (
    <MovieProvider>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
