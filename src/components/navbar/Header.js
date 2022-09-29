import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/associationlogo.jpg';
import './navbar.css';

function CollapsibleExample() {
  return (
    <Navbar className='Navbar' collapseOnSelect expand="lg" variant="dark">
      <Container>
      <Navbar >
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