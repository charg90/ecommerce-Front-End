import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./../../customHooks/HTTP";
import { Container, Row, Col, Button } from "react-bootstrap";
const SingleProduct = () => {
  const { id } = useParams();
  const [{ products: product }] = useFetch(`productos/${id}`);

  console.log(product);

  return (
    <Container className="align-items-center">
      <Row>
        <Col md={4}>
          <p>imagen</p>
        </Col>
        <Col md={8}>
          <h2>nombre:{product.nombre}</h2>
          <h4>precio:{product.precio}</h4>
          <h5>descripcion:{product.descripcion}</h5>
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
