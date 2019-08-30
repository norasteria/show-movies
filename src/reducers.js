import { combineReducers } from "redux";

import movieListReducer from "./pages/movieList/reducer";
import movieDetailsReducer from "./pages/movieDetails/reducer";

export default combineReducers({
  movieList: movieListReducer,
  movieDetails: movieDetailsReducer,
});
