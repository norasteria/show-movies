import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import MovieList from "./pages/movieList";
import MovieDetails from "./pages/movieDetails";

export default () => {
  return (
    <Router>
      <Route path="/" exact component={MovieList} />
      <Route path="/:title" component={MovieDetails} />
    </Router>
  );
};
