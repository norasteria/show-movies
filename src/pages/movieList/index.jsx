import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "react-spinners/SyncLoader";

import { fetchMovieData } from "./action";
import Body from "../../components/Body";
import SearchBar from "../../components/SearchBar";
import NoImg from "../../img/dummy.png";
// require("bootstrap/less/bootstrap.less");

export default () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [moviesArr, setMoviesArr] = useState([]);
  const loading = useSelector(({ movieList }) => movieList.loading);
  const moviesData = useSelector(({ movieList }) => movieList.moviesData);

  useEffect(() => {
    setMoviesArr(moviesData);
  }, [moviesData]);

  const onSearch = useCallback(() => {
    dispatch(fetchMovieData(searchKey));
  }, [dispatch, searchKey]);

  const pictBroken = imdbId => {
    const newMovieData = moviesArr.map(data => {
      if (data.imdbID === imdbId) data.Poster = NoImg;

      return data;
    });

    setMoviesArr(newMovieData);
  };

  return (
    <Body style={{ textAlign: "center" }}>
      <div style={{ marginBottom: 50, letterSpacing: "1em" }}>
        <h1>MOVIES LIST</h1>
      </div>
      <SearchBar searchOnChange={setSearchKey} onSearch={onSearch} />
      {loading ? (
        <div style={{ marginTop: 50, marginBottom: 50 }}>
          <Loader loading={true} sizeUnit={"px"} size={30} />
        </div>
      ) : (
        moviesArr.map(data => (
          <Card
            style={{
              width: 500,
              display: "inline-block",
              marginRight: "50px",
              marginBottom: "50px",
            }}
          >
            <img
              src={data.Poster}
              alt="poster"
              style={{ marginTop: 10, height: 500 }}
              onError={() => pictBroken(data.imdbID)}
            />
            <Card.Body>
              <Card.Title>{data.Title}</Card.Title>
              <Link to={`/${data.Title}`}>
                <Button size="sm">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      )}
    </Body>
  );
};
