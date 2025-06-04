
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <Row>
          <Col>
            <p>John DOE<br />Adresse fictive<br />06 00 00 00 00</p>
            <a href="https://github.com/john-doe" target="_blank" rel="noreferrer nofollow"><FaGithub /></a>
            <a href="https://twitter.com/john-doe" target="_blank" rel="noreferrer nofollow"><FaTwitter /></a>
            <a href="https://linkedin.com/in/john-doe" target="_blank" rel="noreferrer nofollow"><FaLinkedin /></a>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Réalisations</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li><a href="/portfolio">Projet 1</a></li>
              <li><a href="/portfolio">Projet 2</a></li>
              <li><a href="/portfolio">Projet 3</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
