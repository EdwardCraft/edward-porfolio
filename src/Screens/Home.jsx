import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "Components/User/Banner";

const Home = (props) => {
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <Banner />
        </Col>
      </Row>
      <Row>
        <Col> Web Developer </Col>
      </Row>
    </Container>
  );
};

export default Home;
