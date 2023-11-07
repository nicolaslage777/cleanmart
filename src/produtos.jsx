import Card from "react-bootstrap/Card";
import json from "../db.json";
import CardGroup from 'react-bootstrap/CardGroup';

function Produtos() {
  return (
    <div className="linha">
      <CardGroup>

      {json.products.map((id) => (
        
          <Card key={id} className="cartao" bg="light" text="dark">
            <Card.Img variant="top" className="image " src={id.img} />
            <Card.Body>
              <Card.Title>{id.nome}</Card.Title>
              <Card.Text>R${id.price}</Card.Text>
            </Card.Body>
          </Card>
        
      ))}
      </CardGroup>
    </div>
  );
}
export default Produtos;