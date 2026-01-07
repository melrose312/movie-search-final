import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="container">
      <section id="movies">
        {/* Search Section */}
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

        {/* Movies Grid */}
        {movies.length === 0 ? (
          <p style={{ color: '#d4af37', textAlign: 'center', fontSize: '18px' }}>
            Search for a movie to see results
          </p>
        ) : (
          <div className="movies__grid">
            {movies.map((movie) => (
              <div key={movie.id} className="movie__card">
                <figure className="movie__img--wrapper">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="movie__img"
                  />
                  <div className="movie__overlay">
                    <span className="movie__rating">
                      <FontAwesomeIcon icon="fa-solid fa-star" /> {movie.rating}
                    </span>
                  </div>
                </figure>
                <div className="movie__info">
                  <h3 className="movie__title">{movie.title}</h3>
                  <p className="movie__year">{movie.year}</p>
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
