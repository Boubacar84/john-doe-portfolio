
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { useState } from 'react';

function Accueil() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
  
      <div className="hero d-flex align-items-center justify-content-center text-white text-center" style={{ backgroundImage: `url(/assets/images/hero-bg.jpg)`, height: '100vh', backgroundSize: 'cover', filter:'saturate(25%)' }}>
        <div>
          <h1>Bonjour, je suis John DOE</h1>
          <h2>Développeur web full stack</h2>
          <Button variant="danger" onClick={() => setShowModal(true)} style={{filter:'initial'}}>En savoir plus</Button>
    
        </div>
      </div>

      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h3>À propos</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos facere tenetur blanditiis,
                    laudantium
                    eum obcaecati eaque libero, adipisci minus nostrum omnis nam iusto inventore quasi veniam temporibus
                    quod non voluptates assumenda. Nam illum voluptatibus quisquam ipsum laudantium hic tempora deleniti
                    vero ipsam praesentium beatae eius nostrum, repellat aliquam porro, veritatis explicabo nesciunt,
                    sit
                    velit tenetur debitis inventore a quis voluptatem. Magni enim, tempore numquam dicta incidunt optio
                    aliquam consequatur amet qui officia veritatis, corrupti ut exercitationem? Vel asperiores fugit
                    doloremque! Facere itaque accusamus nulla, dolor voluptates in laudantium vitae!.</p>
          </Col>
          <Col md={6}>
            <h3>Compétences</h3>
        
            <ProgressBar striped variant="danger" now={90} label="HTML 90%" className="mb-2" />
            <ProgressBar striped variant="info" now={80} label="CSS 80%" className="mb-2" />
            <ProgressBar striped variant="warning" now={70} label="JavaScript 70%" className="mb-2" />
             <ProgressBar striped variant="success" now={60} label="PHP 60%" className="mb-2" />
            <ProgressBar striped variant="blue" now={50} label="React 50%" className="mb-2" />
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default Accueil;
