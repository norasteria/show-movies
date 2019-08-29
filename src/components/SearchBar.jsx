import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default ({ searchOnChange, onSearch }) => {
  return (
    <InputGroup className="mb-3" style={{ width: "50%", margin: "auto" }}>
      <FormControl
        aria-describedby="basic-addon1"
        onChange={({ target }) => searchOnChange(target.value)}
      />
      <InputGroup.Prepend>
        <Button
          variant="outline-secondary"
          style={{ border: "none", padding: "1px 6px 1px 6px", width: 50 }}
          onClick={onSearch}
        >
          <i class="material-icons">search</i>
        </Button>
      </InputGroup.Prepend>
    </InputGroup>
  );
};
