import React from "react";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import { navBar, navItems, link } from "./navBar.css";
const NavBar = () => {
  return (
    <Container fluid>
      <Row className="navBar d-flex align-items-center justify-content-around ">
        <Col md={3} className="text-center iconLetter mt-3">
          <p>MERCADO GAMER</p>
        </Col>
        <Col md={3} className="text-center navItems">
          <Link to="/login" className="link">
            Login
          </Link>
        </Col>
        <Col md={3} className="texte-center navItems">
          <Link to="/register" className="link">
            Registro
          </Link>
        </Col>
        <Col md={3} className="navItems ">
          <p>Bienvenido</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
