import axios from "axios";

const omdbUrl = "http://www.omdbapi.com?apikey=faf7e5bb&";

export const fetchMovies = searchKey =>
  new Promise((resolve, reject) => {
    axios
      .get(`${omdbUrl}s=${searchKey}`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err));
  });

export const movieDetails = title =>
  new Promise((resolve, reject) => {
    axios
      .get(`${omdbUrl}t=${title}&plot=full`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err));
  });
