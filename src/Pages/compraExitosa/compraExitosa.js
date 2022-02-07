import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./CompraExitosa.css";
const CompraExitosa = () => {
  return (
    <Container className="vh-100">
      <Row>
        <Col className="d-flex justify-content-center mt-5 ">
          <Card style={{ width: "18rem" }} className="bg-success">
            <Card.Body>
              <Card.Title className="text-white">Compra Exitosa</Card.Title>

              <Card.Text className="text-white">
                Muchas Gracias por confiar en nosotros
              </Card.Text>
              <Card.Link className="d-flex justify-content-center ">
                <Link to="/" className="compraExitosa_link">
                  Volver a Inicio{" "}
                </Link>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CompraExitosa;
