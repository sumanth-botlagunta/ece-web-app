import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/associationlogo.jpg';
import './navbar.css';
import { Link } from 'react-router-dom';

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
        <Link to="/" style={{ textDecoration: 'none' }}><Navbar.Brand href="/">ECEA</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">   </Nav>
          <Nav>

            <Link to="/events" style={{ textDecoration: 'none' }}><Nav.Link href="/events">Events</Nav.Link></Link>
            <Link to="/gallery" style={{ textDecoration: 'none' }}><Nav.Link href="/gallery">Gallery</Nav.Link></Link>
            <Link to="/faculty" style={{textDecoration: 'none'}}><Nav.Link href="/faculty">Faculty</Nav.Link></Link>
            <Link to="/about" style={{textDecoration: 'none'}}><Nav.Link href="/about">About</Nav.Link></Link>
            <Link to="/hearld" style={{textDecoration: 'none'}}><Nav.Link href="/hearld">Hearld</Nav.Link></Link>
            
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