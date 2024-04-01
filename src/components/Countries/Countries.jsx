import React from "react";
import "./Countries.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import dresden from "../../assets/germany/germany.jpg";

const Countries = () => {
  return (
    <Container className="countries">
      <Row>
        <Col xs={12} md={6}>
          <span className="main-title">Countries</span>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="menu">
            <ul>
              <li>Deutschland, Greece, Georgia, Czechia, Turkey</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Countries;
