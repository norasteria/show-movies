import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";

import { fetchMovieData } from "./action";
import Body from "../../components/Body";
import SearchBar from "../../components/SearchBar";

export default () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const loading = useSelector(({ moveieList }) => moveieList.loading);
  const moviesData = useSelector(({ moveieList }) => moveieList.moviesData);

  const onSearch = useCallback(() => {
    dispatch(fetchMovieData(searchKey));
  }, [dispatch, searchKey]);

  return (
    <Body style={{ textAlign: "center" }}>
      <div style={{ marginBottom: 50, letterSpacing: "1em" }}>
        <h1>MOVIES LIST</h1>
      </div>
      <SearchBar searchOnChange={setSearchKey} onSearch={onSearch} />
      {moviesData.map(data => (
        <Card style={{ width: 500, display: "inline-block", margin: "auto" }}>
          <img
            src={data.Poster}
            alt="poster"
            style={{ marginTop: 10, cursor: "pointer" }}
          />
          <Card.Body>
            <Card.Title>{data.Title}</Card.Title>

            <Button size="sm">View Details</Button>
          </Card.Body>
        </Card>
      ))}
    </Body>
  );
};
