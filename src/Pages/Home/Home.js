import { Container, Row, Carousel, Col } from "react-bootstrap";
import "./home.css";
const Home = () => {
  return (
    <Container fluid className="body   ">
      <Row>
        <Col md={12}>
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
      </Row>
      <Row className="mt-5 box  w-75     ">
        <Col
          md={4}
          className=" d-flex  align-items-center justify-content-center  "
        >
          <i className="far fa-credit-card fa-2x  text-center "></i>
          <p className="icon mr-2 px-2">Aceptamos tarjetas Credito</p>
        </Col>
        <Col
          md={4}
          className="d-flex  align-items-center justify-content-center"
        >
          <i className="far fa-credit-card fa-2x "></i>
          <p className="icon text-center px-2">Aceptamos tarjetas Debito</p>
        </Col>
        <Col
          md={4}
          className="d-flex  align-items-center justify-content-center"
        >
          <i className="fas fa-money-bill-wave-alt fa-2x  "></i>
          <p className="icon text-center  px-2">Aceptamos Efectivo</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
