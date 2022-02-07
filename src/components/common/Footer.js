import { Row, Col, Container } from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
    <Container fluid fixed="bottom" className="h-25 footerStyle">
      <Row className="">
        <Col md={4} className="text-center">
          <p>Copyright 2021</p>
        </Col>
        <Col md={4} className="text-center">
          <p>calle siempre falsa 123 </p>
        </Col>
        <Col md={4} sm={12} className="text-center">
          <p>Vendiendo desde 2021 </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
