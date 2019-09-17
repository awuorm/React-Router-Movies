import React from 'react';

const MovieCard = props => {
  const {movie} = props;
  console.log(props)
  return (<div className="movie-card">
  <h2>{movie.title}</h2>
  <div className="movie-director">
    Director: <em>{movie.director}</em>
  </div>
  <div className="movie-metascore">
    Metascore: <strong>{movie.metascore}</strong>
  <h3>Actors</h3>
  </div>

  {movie.stars.map(star => (
    <div key={star} className="movie-star">
      {star}
    </div>
  ))}
</div>) 
  


};

export default MovieCard;
