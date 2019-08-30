import { movieDetails } from "../../api";

export const fetchMovieDetails = title => async dispatch => {
  // console.clear();
  // console.log(JSON.stringify(title));

  const data = await movieDetails(title);

  dispatch({
    type: "FETCH_MOVIE_DETAILS",
    payload: data,
  });
};
