import { useParams } from "react-router-dom";
import { useGet } from "./../../customHooks/HTTP";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { PRODUCTS } from "./../../constants/constants";
import "./singleproduct.css";
const SingleProduct = () => {
  const { id } = useParams();
  const [{ products: product }] = useGet(`${PRODUCTS}/${id}`);
  console.log(product.img);

  return (
    <Container fluid className="align-items-center contenedor ">
      <Row>
        <Col md={4} className="mt-5">
          <Image
            src={product.img}
            alt="no se encontro"
            className="foto-Stylee"
          />
        </Col>
        <Col md={8} className="mt-5">
          <h2 className="letras">nombre:{product.nombre}</h2>
          <h4 className="letras">precio:{product.precio}</h4>
          <h5 className="letras">descripcio:{product.descripcion}</h5>
          <div className="d-grid gap-3 btn btn-block">
            <Button
              type="button"
              variant="primary"
              size="lg"
              className="btn btn-block"
            >
              comprar
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
