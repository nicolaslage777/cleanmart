import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cardes() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/fotos-gratis/lavagem-de-liquidos-com-esponjas_23-2148333867.jpg?w=740&t=st=1699359616~exp=1699360216~hmac=3ad2d9529b0108a5b2b01dc5b8beb5739f23c05bdf4b682e30e14ad6dcdc45af" />
        <Card.Body>
          <Card.Title>Detergente</Card.Title>
          <Card.Text>
          Esse detergente é líder na categoria e possui uma fórmula que proporciona rendimento com eficiência de limpeza e economia.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/fotos-gratis/conceito-de-produtos-de-limpeza-ecologicos_23-2148781939.jpg?w=740&t=st=1699359781~exp=1699360381~hmac=79b0797db1a8302297638eb33c6de7c57a681901609f36e88881bc175ee63593" />
        <Card.Body>
          <Card.Title>Alvejante</Card.Title>
          <Card.Text>
          O Alvejante  pode ser usado em roupas de todas as cores e superfícies de pisos e azulejos. É um poderoso limpador de manchas de difícil remoção, tais como café, vinho tinto e resíduos de alimentos. {' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/psd-gratuitas/renderizacao-3d-de-produto-de-limpeza_23-2149929616.jpg?w=740&t=st=1699359898~exp=1699360498~hmac=f5cbf07f1187164e1ede2e8def798d819c55a555d01e092e25cd74055e38f0ac" />
        <Card.Body>
          <Card.Title>Amaciante</Card.Title>
          <Card.Text>
          AMACIANTE. Nada como usar roupas macias e perfumadas, com um toque de carinho.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cardes;