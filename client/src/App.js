import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import {Route} from "react-router-dom";
import MovieList from "../src/Movies/MovieList";
import Movie from "../src/Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      {/* <SavedList  /> */}
      <Route render={(props) => <SavedList  list={savedList} {...props}/>}/>
      <Route  exact path="/" component={MovieList}></Route>
      <Route path="/movies/:id" 
       render={(props) => <Movie {...props} addToSavedList={addToSavedList} />}></Route>
      
    </div>
  );
};

export default App;
