import { useContext, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./userProfile.css";
const UserProfile = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const { id } = useParams();

  const deleteProduct = (id) => {};

  const createProduct = () => {
    navigate("/productoNuevo");
  };

  return (
    <Container className="container">
      <Row className="mt-5 border letras">
        <Col md={5} className="d-flex align-items-center">
          <p>image</p>
        </Col>
        <Col md={5}></Col>
        <Col md={2} className="d-flex align-items-center">
          <Button onClick={createProduct}>Vender YA</Button>
        </Col>
      </Row>

      <Row className="mt-5 d-flex justify-content-center letras"></Row>
    </Container>
  );
};

export default UserProfile;
