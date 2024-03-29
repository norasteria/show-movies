import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "react-spinners/SyncLoader";
import Pagination from "../../components/Pagination";

import { fetchMovieData } from "./action";
import Body from "../../components/Body";
import SearchBar from "../../components/SearchBar";
import NoImg from "../../img/dummy.png";

export default () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [moviesArr, setMoviesArr] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [displayPict, setPict] = useState("");
  const totalData = useSelector(({ movieList }) => movieList.totalData);
  const loading = useSelector(({ movieList }) => movieList.loading);
  const moviesData = useSelector(({ movieList }) => movieList.moviesData);

  useEffect(() => {
    setMoviesArr(moviesData);
  }, [moviesData]);

  const pictBroken = imdbId => {
    const newMovieData = moviesArr.map(data => {
      if (data.imdbID === imdbId) data.Poster = NoImg;

      return data;
    });

    setMoviesArr(newMovieData);
  };

  const onShowModal = posterUrl => {
    setShowModal(true);
    setPict(posterUrl);
  };

  return (
    <Body style={{ textAlign: "center" }}>
      <div style={{ marginBottom: 50, letterSpacing: "1em" }}>
        <h1>MOVIES LIST</h1>
      </div>
      <SearchBar
        searchOnChange={setSearchKey}
        onSearch={() => dispatch(fetchMovieData(searchKey))}
      />

      <div style={{ marginTop: 50, marginBottom: 50 }}>
        <Loader loading={loading} sizeUnit={"px"} size={30} />
      </div>
      {moviesArr.map(data => (
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
            style={{ marginTop: 10, height: 500, cursor: "pointer" }}
            onError={() => pictBroken(data.imdbID)}
            onClick={() => onShowModal(data.Poster)}
          />
          <Card.Body>
            <Card.Title>{data.Title}</Card.Title>
            <Link to={`/${data.Title}`}>
              <Button size="sm">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>Display Poster</Modal.Header>
        <Modal.Body>
          <img src={displayPict} alt="poster" style={{ height: 700 }} />
        </Modal.Body>
      </Modal>

      <Pagination
        onPageChange={({ selected }) =>
          dispatch(fetchMovieData(searchKey, selected + 1))
        }
        totalData={totalData}
      />
    </Body>
  );
};
