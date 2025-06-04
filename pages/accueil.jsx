
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import ModalGitHub from '../components/ModalGitHub';
import { useState } from 'react';

function Accueil() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="hero d-flex align-items-center justify-content-center text-white text-center" style={{ backgroundImage: `url(/assets/images/hero.jpg)`, height: '100vh', backgroundSize: 'cover' }}>
        <div>
          <h1>Bienvenue, je suis John DOE</h1>
          <h2>Développeur Web en alternance</h2>
          <Button variant="light" onClick={() => setShowModal(true)}>En savoir plus</Button>
        </div>
      </div>

      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h3>À propos</h3>
            <p>Développeur passionné en fin de formation au CEF, je suis à la recherche d'une alternance.</p>
          </Col>
          <Col md={6}>
            <h3>Compétences</h3>
            <p>HTML / CSS / JavaScript / React / GitHub</p>
            <ProgressBar striped variant="success" now={90} label="HTML" className="mb-2" />
            <ProgressBar striped variant="info" now={85} label="CSS" className="mb-2" />
            <ProgressBar striped variant="warning" now={70} label="JavaScript" className="mb-2" />
            <ProgressBar striped variant="danger" now={60} label="React" className="mb-2" />
          </Col>
        </Row>
      </Container>

      <ModalGitHub show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}

export default Accueil;
