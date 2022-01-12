import React, { useState } from "react";
import { Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./style.css";
export const SearchBar = () => {
  const data = ["123", "145", "456"];
  const [selected, setSelected] = useState([]);
  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  console.log(selected);
  return (
    <div>
      <Row style={{ marginTop: "2%" }}>
        <Col lg={12} sm={12} md={12}>
          <InputGroup className="search-input">
            <Typeahead
              className="typehead"
              onChange={handleChange}
              options={data}
              placeholder="Type in a Search Term and Press Enter"
              selected={selected}
              id="101"
              labelKey="term"
              onKeyDown={(evt) => {
                if (evt.key === "Alt") {
                  console.log("Enter");
                }
                console.log(evt.target.value);
              }}
            />

            <Button variant="light"> Search</Button>
          </InputGroup>
          <input id="ok" onChange={handleChange} />
        </Col>
      </Row>
    </div>
  );
};
