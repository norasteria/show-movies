import axios from "axios";

const omdbUrl = "https://www.omdbapi.com?apikey=faf7e5bb&";

export const fetchMovies = (searchKey, page) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${omdbUrl}s=${searchKey}&page=${page}`)
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
