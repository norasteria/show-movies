import React from "react";
import Pagination from "react-paginate";

export default ({ onPageChange, totalData }) => (
  <div className="pagination" style={{ margin: "auto", display: "block" }}>
    {totalData > 0 ? (
      <Pagination
        previousLabel="Prev"
        nextLabel="Next"
        breakLabel="..."
        pageCount={totalData / 10}
        pageRangeDisplayed={4}
        onPageChange={onPageChange}
        activeClassName="active"
      />
    ) : null}
  </div>
);
