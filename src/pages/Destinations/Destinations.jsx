import React from 'react'
import './Destinations.css'
import germany from '../../assets/germany/germany.jpg'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Destinations = () => {
  return (
    <Container fluid className='destinations'>
     
     <Row>
      <Col className='image' sm={4}>
        <img src={germany} alt="" />
        </Col>
      <Col sm={8} className="title">
        <ul className='country'>
           <li> <Link to="/destinations/germany/dresden">Dresden,   &nbsp;      </Link></li>
           <li> <Link to="/destinations/berlin">Berlin,    &nbsp;         </Link></li>
           <li> <Link to="/destinations/hamburg">Hamburg,   &nbsp;          </Link></li>
           <li> <Link to="/destinations/praha">Praha,      &nbsp;       </Link></li>
           <li> <Link to="/destinations/athens">Athens,     &nbsp;        </Link></li>
           <li> <Link to="/destinations/antalya">Antalya,    &nbsp;         </Link></li>
           <li> <Link to="/destinations/istanbul">Istanbul   &nbsp;          </Link></li>

        </ul>
      </Col>
      </Row>
    </Container>
  )
}

export default Destinations