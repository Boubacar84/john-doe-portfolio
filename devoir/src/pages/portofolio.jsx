
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/main.css';

const projets = [
  {
    titre: "Site Vitrine",
    description: "Un site vitrine pour une entreprise locale, responsive et optimisé SEO.",
    image: "/assets/images/projet1.jpg",
    lien: "#"
  },
  {
    titre: "Application React",
    description: "Application en React avec gestion d’état, hooks, et routing dynamique.",
    image: "/assets/images/projet2.jpg",
    lien: "#"
  },
  {
    titre: "Portfolio Personnel",
    description: "Un portfolio moderne pour présenter mes projets et compétences.",
    image: "/assets/images/projet3.jpg",
    lien: "#"
  },
  {
    titre: "Blog Tech",
    description: "Un blog tech construit avec React et une API REST pour la gestion des articles.",
    image: "/assets/images/projet4.jpg",
    lien: "#"
  },
  {
    titre: "To-do App",
    description: "Gestion de tâches avec React, local storage et filtres dynamiques.",
    image: "/assets/images/projet5.jpg",
    lien: "#"
  },
  {
    titre: "Dashboard Admin",
    description: "Interface d’administration avec Bootstrap, charts et filtres interactifs.",
    image: "/assets/images/projet6.jpg",
    lien: "#"
  }
];

function Portfolio() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Mes réalisations</h1>
      <Row>
        {projets.map((projet, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="portfolio-card h-100">
              <Card.Img variant="top" src={projet.image} alt={projet.titre} />
              <Card.Body>
                <Card.Title>{projet.titre}</Card.Title>
                <Card.Text>{projet.description}</Card.Text>
                <Button variant="primary" href={projet.lien} target="_blank" rel="noreferrer">Voir le projet</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
