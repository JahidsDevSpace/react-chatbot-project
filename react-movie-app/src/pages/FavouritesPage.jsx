import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/MovieContext';
import './FavouritesPage.css';

function FavouritesPage() {
  const {favourites} = useMovieContext();

  if (favourites) {
    return ( 
      <div className='favourites'>
        <h2>Your Favourites</h2>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-empty">
      <h2>No Favourite Movie Yet</h2>
      <p>Start adding movies to your favourites and they will appear here.</p>
    </div>
  );
}

export default FavouritesPage