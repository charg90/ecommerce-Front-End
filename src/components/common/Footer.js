import { Row, Col, Container } from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
    <Container fluid className="h-25 footerStyle">
      <Row className="">
        <Col className="text-center">
          <p>Copyright 2021</p>
        </Col>
        <Col className="text-center">
          <p>calle siempre falsa 123 </p>
        </Col>
        <Col className="text-center">
          <p>Vendiendo desde 2021 </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
