
import { Col, Container, Row } from "react-bootstrap";
import { SearchBar } from "../../components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Search.css";
export default function Search() {
  return (
    <Container className="search-main">
      <Row>
        <Col lg={12}>
          <div className="search-header">
            <h2>SearchAll™ William Shakespeare</h2>
            <p>
              Enter a search term below to search the corpus of William
              Shakespeare.
            </p>
            <SearchBar/>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
