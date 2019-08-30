import { fetchMovies } from "../../api";

export const fetchMovieData = searchKey => async dispatch => {
  dispatch({ type: "START_LOADER" });

  const data = await fetchMovies(searchKey);

  dispatch({
    type: "FETCH_MOVIES_DATA",
    payload: {
      moviesData: data.Search,
      totalData: data.totalResults,
      loading: false,
    },
  });
};
