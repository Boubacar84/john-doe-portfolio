
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">John DOE</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto text-uppercase">
            <NavLink to="/" className="nav-link">Accueil</NavLink>
            <NavLink to="/services" className="nav-link">Services</NavLink>
            <NavLink to="/portfolio" className="nav-link">Réalisations</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            <NavLink to="/mentions-legales" className="nav-link">Mentions légales</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

