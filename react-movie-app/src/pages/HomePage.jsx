import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import LoadingImage from '../../public/SpinnerLoading.gif';
import "./HomePage.css";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async() => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError('Failed to load movies...')
      }
      finally {
        setIsLoading(false);
      }
    }

    loadPopularMovies();
  }, [])

  const handleSearch = async(e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (isLoading) return;

    setIsLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError('Failed to search movies...');
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="home-page">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {isLoading ? (
        <img src={LoadingImage} alt="loading..." className="loading-image" />
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
