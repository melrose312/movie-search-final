import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

function Movies() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchMovies(query) {
    if (!query || !query.trim()) return;
    setLoading(true);
    try {
      const [{ data }] = await Promise.all([
        axios.get(`https://www.omdbapi.com/?apikey=4c277607&s=${query}`),
        new Promise(resolve => setTimeout(resolve, 1000))
      ]);
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }

  // CHECK FOR SEARCH PARAM FROM URL ON PAGE LOAD
  useEffect(() => {
    const searchFromUrl = searchParams.get("search");
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
      fetchMovies(searchFromUrl);
    }
  }, [searchParams]);

  return (
    <div className="container">
      <section id="movies">
        {/* SEARCH INPUT */}
        <header className="movies__header">
          <h2 className="movies__title">Search Results</h2>
          <div className="search__wrapper">
            <input
              type="text"
              className="search__input"
              placeholder="Search by Title or Keyword..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchMovies(searchQuery)}
            />
            <button className="search__btn" onClick={() => fetchMovies(searchQuery)}>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </header>

        {/* MOVIES GRID */}
        {searchQuery.length === 0 ? (
          <p
            style={{ color: "#d4af37", textAlign: "center", fontSize: "18px" }}
          >
            Search for a movie to see results
          </p>
        ) : loading ? (
          <div className="loading__wrapper">
            <div className="loading__spinner"></div>
            <p className="loading__text">Searching for movies...</p>
          </div>
        ) : (
          <div className="movies__grid">
            {movies.slice(0, 9).map((movie) => (
              <Link to={`/Movie/${movie.imdbID}`} key={movie.imdbID} className="movie__card">
                <figure className="movie__img--wrapper">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="movie__img"
                  />
                </figure>
                <div className="movie__info">
                  <h3 className="movie__title">{movie.Title}</h3>
                  <p className="movie__year">{movie.Year}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Movies;
