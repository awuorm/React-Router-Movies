import React from "react";
import { NavLink } from "react-router-dom";

const SavedList = props => {
  
  
  //rendering NavLink
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink
          to={props.match.url}
          key={movie.id}
          className="saved-movie"
        >
          {movie.title}
        </NavLink>
      ))}
      <NavLink to="/" className="home-button">
        Home
      </NavLink>
    </div>
  );
};

export default SavedList;
