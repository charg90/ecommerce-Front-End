import { Container, Row, Col, Spinner } from "react-bootstrap";

const Spinners = () => {
  return (
    <Container className="d-flex justify-content-center vh-100">
      <Row classname="d-flex align-items-center ">
        <Spinner
          animation="border"
          role="status"
          classname="d-flex align-items-center "
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
    </Container>
  );
};

export default Spinners;
