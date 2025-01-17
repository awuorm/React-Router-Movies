import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
//created link component
function MovieDetails({ movie }) {
  const { title, id } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <Link to={`/movies/${id}`}>Click to view movie details</Link>
    </div>
  );
}

export default MovieList;
