import { movieDetails } from "../../api";

export const fetchMovieDetails = title => async dispatch => {
  const data = await movieDetails(title);

  dispatch({
    type: "FETCH_MOVIE_DETAILS",
    payload: data,
  });
};
