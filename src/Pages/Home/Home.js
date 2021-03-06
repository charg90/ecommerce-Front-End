import { Container, Carousel, Col, Card, ListGroup } from "react-bootstrap";
import "./home.css";
const Home = () => {
  return (
    <Container fluid className="body  px-0 mb-5  ">
      <Col lg={12} md={12} sm={12}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src="./../../../../img/computer-ga837a3284_1280.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Lo ultimo en Tegnologia</h3>
              <p>Compra los ultimos lanzamientos del mercado</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src="./../../../../img/ecommerce-gdb5d75b2b_1920.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="letters">
                Total segurida para que compres con tranquilidad
              </h3>
              <p>Aceptamos todas las tarjetas y tenes cuotas sin interes</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src="./../../../../img/woman-g44694384e_1280.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Encontra lo que quieras comprar aca!</h3>
              <p className="icon">Somos la empresa lider en latino America</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>

      <Col className="d-flex justify-content-center ">
        <Card style={{ width: "18rem" }} className="shadows mt-5">
          <Card.Header className="text-center iconHome">
            Todos los medio de pago
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <i className="fas fa-credit-card text-center px-2 fa-lg icons"></i>
              <p className="d-inline iconHome">Tarjetas de credito</p>
            </ListGroup.Item>
            <ListGroup.Item className="">
              <i className="fas fa-credit-card texte center px-2 fa-lg icons"></i>
              <p className="d-inline text-center iconHome">
                Tarjetas de debito
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-dollar-sign text-center px-2 fa-lg icons"></i>
              <p className="d-inline iconHome">Efectivo en nuestro locales</p>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Container>
  );
};

export default Home;
