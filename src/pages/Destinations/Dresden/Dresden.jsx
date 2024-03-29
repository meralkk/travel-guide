import React, { useState, useEffect } from "react";
import "./Dresden.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import dresden from "./dresden.jpg";

const Dresden = () => {
  const [weatherData, setWeatherData] = useState(null);
  const weatherApiKey = "f69ab875b5a843e8a0206b26d896e043";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=40.604446&lon=-95.657771&appid=${weatherApiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      <Container className="city-container">
        <Row>
          <Col xs={12} md={8}>
            <div className="city-title">DRESDEN</div>
            {weatherData && (
              <div className="weather">
                {weatherData.weather[0].description}
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <div className="parallax-container">
        <div
          className="parallax"
          style={{ backgroundImage: `url(${dresden})` }}
        ></div>
      </div>
     
      <Container fluid className="content-container">
      <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      </Container>
    </>
  );
};

export default Dresden;
