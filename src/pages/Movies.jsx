import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios"

function Movies() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const { data } = await axios.get("https://www.omdbapi.com/?apikey=4c277607&s=fast");
    setMovies(data.Search || []);
    console.log(data)
  }
  useEffect(() => {
    fetchMovies();
  }, []);
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
            />
            <button className="search__btn">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </header>

        {/* MOVIES GRID */}
        {movies.length === 0 ? (
          <p style={{ color: '#d4af37', textAlign: 'center', fontSize: '18px' }}>
            Search for a movie to see results
          </p>
        ) : (
          <div className="movies__grid">
            {movies.map((movie) => (
              <div key={movie.imdbID} className="movie__card">
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
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Movies;
