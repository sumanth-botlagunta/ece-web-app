import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/associationlogo.jpg';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" className='brand'>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
        <Navbar.Brand href="#home">ECEA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">   </Nav>
          <Nav>
            <Nav.Link href="#deets">Events</Nav.Link>
            <Nav.Link href="#deets">Gallery</Nav.Link>
            <Nav.Link href="#deets">Team</Nav.Link>
            {/* 
              add logos for social media
            */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;