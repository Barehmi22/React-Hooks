
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
       
      <div className="movie-info">
        <img src={movie.posterURL} alt={movie.title} style={{width:'250px'}} />
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
