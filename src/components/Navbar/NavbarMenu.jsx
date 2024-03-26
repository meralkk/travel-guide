import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarMenu.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container fluid className='container'>
        <Navbar.Brand className='brand' href="#"><h2>Travel Guide</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Destinations" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#germany">Germany</NavDropdown.Item>
              <NavDropdown.Item href="#greece">Greece</NavDropdown.Item>
              <NavDropdown.Item href="#netherlands">Netherlands</NavDropdown.Item>
              <NavDropdown.Item href="#georgia">Georgia</NavDropdown.Item>
              <NavDropdown.Item href="#czechia">Czechia</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about-me">About me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;