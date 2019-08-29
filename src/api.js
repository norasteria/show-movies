import axios from "axios";

export const fetchMovies = searchKey =>
  new Promise((resolve, reject) => {
    axios
      .get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${searchKey}`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err));
  });
