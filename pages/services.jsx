
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/main.css'; // pour les effets personnalisés

const services = [
  {
    titre: "Développement Front-End",
    description: "Création d'interfaces modernes, réactives et accessibles en HTML, CSS, JavaScript et React.",
    image: "/assets/images/frontend.jpg"
  },
  {
    titre: "Développement Back-End",
    description: "Mise en place de serveurs Node.js, gestion de bases de données, API RESTful.",
    image: "/assets/images/backend.jpg"
  },
  {
    titre: "SEO & Performance",
    description: "Optimisation du site pour les moteurs de recherche et le temps de chargement.",
    image: "/assets/images/seo.jpg"
  }
];

function Services() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Mes services</h1>
      <Row>
        {services.map((service, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="service-card h-100">
              <Card.Img variant="top" src={service.image} alt={service.titre} />
              <Card.Body>
                <Card.Title>{service.titre}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
