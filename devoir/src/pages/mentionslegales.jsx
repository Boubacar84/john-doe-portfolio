
import { Accordion, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function MentionsLegales() {
  return (
    <Container className="my-5">
      {/* Balise <meta name="robots" content="noindex"> via Helmet */}
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Mentions légales – John Doe</title>
      </Helmet>

      <h1 className="text-center mb-4">Mentions légales</h1>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            Ce site est édité par John Doe, développeur web en formation au CEF.  
            <br />
            Adresse : 123 Rue des Développeurs, 75000 Paris  
            <br />
            Email : john.doe@email.com  
            <br />
            Téléphone : 06 00 00 00 00
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur du site</Accordion.Header>
          <Accordion.Body>
            Le site est hébergé par GitHub Pages.  
            <br />
            Adresse : GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA  
            <br />
            Site : <a href="https://pages.github.com/" target="_blank" rel="noreferrer">https://pages.github.com/</a>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            Les images utilisées sur ce site sont issues de <a href="https://pixabay.com" target="_blank" rel="noreferrer">Pixabay</a>.  
            <br />
            Les icônes sont fournies par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noreferrer">Flaticon</a>.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default MentionsLegales;
