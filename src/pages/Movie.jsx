import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const { data } = await axios.get(
                    `https://www.omdbapi.com/?apikey=4c277607&i=${id}&plot=full`
                );
                setMovie(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movie details:", error);
                setLoading(false);
            }
        }
        fetchMovieDetails();
    }, [id]);

    // CONVERT RATING TO STAR COUNT (out of 10)
    function renderStars(rating, maxScore = 10) {
        const numericRating = parseFloat(rating);
        if (isNaN(numericRating)) return null;

        // SET THE NORMALIZED RATING BETWEEN 0 AND 10
        const normalizedRating = Math.min(10, Math.max(0, (numericRating / maxScore) * 10));
        const fullStars = Math.floor(normalizedRating);
        const halfStar = normalizedRating % 1 >= 0.5;
        // ENSURE emptyStars IS NEVER NEGATIVE
        const emptyStars = Math.max(0, 10 - fullStars - (halfStar ? 1 : 0));

        return (
            <div className="stars">
                {[...Array(fullStars)].map((_, i) => (
                    <FontAwesomeIcon key={`full-${i}`} icon="fa-solid fa-star" className="star star--filled" />
                ))}
                {halfStar && (
                    <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" className="star star--half" />
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <FontAwesomeIcon key={`empty-${i}`} icon="fa-regular fa-star" className="star star--empty" />
                ))}
            </div>
        );
    }

    if (loading) {
        return (
            <div className="container">
                <section id="movie-detail">
                    <p className="loading-text">Loading movie details...</p>
                </section>
            </div>
        );
    }

    if (!movie || movie.Response === "False") {
        return (
            <div className="container">
                <section id="movie-detail">
                    <p className="error-text">Movie not found.</p>
                    <Link to="/Movies" className="back-link">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Search Movies
                    </Link>
                </section>
            </div>
        );
    }

    return (
        <div className="container">
            <section id="movie-detail">
                {/* Back Link */}
                <Link to="/Movies" className="back-link">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Search Movies
                </Link>

                <div className="movie-detail__content">
                    {/* Movie Poster */}
                    <figure className="movie-detail__poster">
                        <img
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"}
                            alt={movie.Title}
                        />
                    </figure>

                    {/* Movie Info */}
                    <div className="movie-detail__info">
                        <h1 className="movie-detail__title">{movie.Title}</h1>

                        {/* Summary */}
                        <div className="movie-detail__section">
                            <h3 className="movie-detail__label">Summary</h3>
                            <p className="movie-detail__plot">{movie.Plot}</p>
                        </div>

                        {/* Starring */}
                        <div className="movie-detail__section">
                            <h3 className="movie-detail__label">Starring</h3>
                            <p className="movie-detail__actors">{movie.Actors}</p>
                        </div>

                        {/* Movie Details */}
                        <div className="movie-detail__meta">
                            <div className="meta__row">
                                <span className="meta__label">Written By</span>
                                <span className="meta__value">{movie.Writer}</span>
                            </div>
                            <div className="meta__row">
                                <span className="meta__label">Director</span>
                                <span className="meta__value">{movie.Director}</span>
                            </div>
                            <div className="meta__row">
                                <span className="meta__label">Awards</span>
                                <span className="meta__value">{movie.Awards}</span>
                            </div>
                            <div className="meta__row">
                                <span className="meta__label">Released</span>
                                <span className="meta__value">{movie.Released}</span>
                            </div>
                        </div>

                        {/* Ratings Section */}
                        <div className="movie-detail__section">
                            <h3 className="movie-detail__label">Ratings</h3>
                            <div className="movie-detail__ratings">
                                {movie.Ratings && movie.Ratings.map((rating, index) => {
                                    const isIMDB = rating.Source === "Internet Movie Database";
                                    let ratingValue = rating.Value;

                                    // Interpret IMDB rating format (e.g., "7.5/10")
                                    if (isIMDB && rating.Value.includes("/10")) {
                                        ratingValue = rating.Value.replace("/10", "");
                                    }

                                    return (
                                        <div key={index} className="rating__item">
                                            <span className="rating__source">
                                                {rating.Source}: {rating.Value}
                                            </span>
                                            {isIMDB && renderStars(ratingValue, 10)}
                                        </div>
                                    );
                                })}
                                {/* Fallback to IMDB Rating if no Ratings */}
                                {(!movie.Ratings || movie.Ratings.length === 0) && movie.imdbRating && (
                                    <div className="rating__item">
                                        <span className="rating__source">
                                            IMDb Rating: {movie.imdbRating}/10
                                        </span>
                                        {renderStars(movie.imdbRating)}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Movie;