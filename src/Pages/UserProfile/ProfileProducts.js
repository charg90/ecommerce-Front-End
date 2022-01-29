import { Col, Card, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./userProfile.css";
const ProfileProducts = ({ nombre, precio, id, eliminateProduct, img }) => {
  const navigate = useNavigate();
  const updateProduct = () => {
    navigate(`/updateProduct/${id}`);
  };

  const deleteProduct = () => {
    eliminateProduct(id);
  };
  return (
    <Col lg={3} md={4} sm={3} className="mt-2 ">
      <Card className=" ">
        <Row className="d-flex justify-content-center">
          <Card.Img variant="top" src={`${img}`} className=" img-style " />
        </Row>
        <Card.Body>
          <Card.Title className="card-title text-center">{nombre}</Card.Title>
          <Card.Title className="card-title text-center">
            precio:{precio}$
          </Card.Title>
        </Card.Body>
        <Button variant="outline-primary" onClick={updateProduct}>
          Editar
        </Button>
        <Button variant="outline-danger" onClick={deleteProduct}>
          Eliminar
        </Button>
      </Card>
    </Col>
  );
};

export default ProfileProducts;
