import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Container } from "reactstrap";
import "./Search.css";
export const SearchBar = () => {
  const data = ["123", "145", "456"];
  const [selected, setSelected] = useState([]);
  console.log(selected);
  return (
    <Container>
      <Typeahead
        className="typehead"
        onChange={setSelected}
        options={data}
        placeholder="Choose a state..."
        selected={selected}
      />
    </Container>
  );
};
