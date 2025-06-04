
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Me contacter</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="nom" className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Votre nom" required />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control type="email" placeholder="votre@email.com" required />
            </Form.Group>

            <Form.Group controlId="telephone" className="mb-3">
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control type="tel" placeholder="0600000000" required />
            </Form.Group>

            <Form.Group controlId="sujet" className="mb-3">
              <Form.Label>Sujet</Form.Label>
              <Form.Control type="text" placeholder="Sujet de votre message" required />
            </Form.Group>

            <Form.Group controlId="message" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Votre message..." required />
            </Form.Group>

            <Button type="submit" variant="primary">Envoyer</Button>
          </Form>
        </Col>

        <Col md={6}>
          <h3 className="mb-3">Mes coordonnées</h3>
          <p><strong>Adresse :</strong> 123 Rue des Développeurs, 75000 Paris</p>
          <p><strong>Téléphone :</strong> 06 00 00 00 00</p>
          <p><strong>Email :</strong> john.doe@email.com</p>

          <div className="map-responsive mt-4">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999221075498!2d2.292292615674837!3d48.858844079287025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdeb00ed5d7%3A0xc80b8f06e177fe62!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1622725622705!5m2!1sfr!2sfr"
              width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
