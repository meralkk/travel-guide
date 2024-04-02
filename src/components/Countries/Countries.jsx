import "./Countries.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import germany from '../../assets/germany/germany.jpg'
import Spacer from "../Spacer/Spacer";

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
            <li><a href="#germany">Germany</a>,</li>
            <li><a href="#greece">Greece</a>,</li>
            <li><a href="#turkey">Turkey</a>,</li>
              <li>Georgia,</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col id="germany">
        <Spacer/>
        <h1>#Germany</h1>
        <Spacer/>
        <div className="cities">
          <Col><h2>Dresden</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Hamburg</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Berlin</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Schwerin</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Schwerin</h2>
          <img className="cities-image" src={germany} alt="" /></Col>


        </div>
        </Col>
        
      </Row>
      <Row>
        <Col id="greece">
        <Spacer/>
        <h1>#Greece</h1>
        <Spacer/>
        <div className="cities">
          <Col><h2>Dresden</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Hamburg</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Berlin</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Schwerin</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Schwerin</h2>
          <img className="cities-image" src={germany} alt="" /></Col>


        </div>
        </Col>
        
      </Row>
      <Row>
        <Col id="turkey">
        <Spacer/>
        <h1>#Turkey</h1>
        <Spacer/>
        <div className="cities">
          <Col><h2>Dresden</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Hamburg</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Berlin</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Schwerin</h2>
          <img className="cities-image" src={germany} alt="" /></Col>
          <Col><h2>Schwerin</h2>
          <img className="cities-image" src={germany} alt="" /></Col>


        </div>
        </Col>
        
      </Row>


    </Container>
  );
};

export default Countries;
