import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WeatherViewContainer from "../../parts/location.weather.view/WeatherViewContainer/WeatherViewContainer";
import SearchField from "../../parts/search.locations/SearchField/SearchField";
import SearchResults from "../../parts/search.locations/SearchResults/SearchResults";




function Home() {
  return (
    <Container className="Home" style={{height:"100vh"}}>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <SearchField />
          <SearchResults/>
        </Col>
      </Row>
      <Row>
        <Col><WeatherViewContainer/></Col>
      </Row>
    </Container>
  );
}

export default Home;
