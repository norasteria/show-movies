import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-spinners/SyncLoader";

import { fetchMovieDetails } from "./action";
import Body from "../../components/Body";

export default ({ match }) => {
  const dispatch = useDispatch();
  const content = useSelector(({ movieDetails }) => movieDetails.content);
  const loading = useSelector(({ movieDetails }) => movieDetails.loading);

  useEffect(() => {
    dispatch(fetchMovieDetails(match.params.title));
  }, [dispatch, match.params.title]);

  return (
    <Body>
      <h2
        style={{ marginBottom: 50, letterSpacing: "1em", textAlign: "center" }}
      >
        MOVIE DETAILS
      </h2>
      <hr />
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <Loader loading={true} sizeUnit={"px"} size={30} />
        </div>
      ) : (
        <Row style={{ marginTop: 50 }}>
          <Col style={{ textAlign: "center" }}>
            <img
              src={content.Poster}
              alt="Poster"
              style={{ borderRadius: 5 }}
            />
          </Col>
          <Col>
            <div>
              <h2 style={{ display: "inline-block" }}>{content.Title}</h2> (
              {content.Year})
            </div>
            <span>Genre : {content.Genre}</span>
            <p>
              Rating : {content.imdbRating} | Duration : {content.Runtime}
            </p>
            <p style={{ marginTop: 50 }}>{content.Plot}</p>
          </Col>
        </Row>
      )}
    </Body>
  );
};
