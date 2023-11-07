import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://images.pexels.com/photos/5217889/pexels-photo-5217889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption text="dark">
          <h3>Produtos de manutenção para pisos de madeira</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://images.pexels.com/photos/4239116/pexels-photo-4239116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Produtos Recentes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://images.pexels.com/photos/5591984/pexels-photo-5591984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <Carousel.Caption>
          <h3>Conheça toda linha de produtos para sua organização</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;