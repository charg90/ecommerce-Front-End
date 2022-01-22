import { Col, Card, Button } from "react-bootstrap";
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
    <Col lg={2} md={4} sm={12}>
      <Card className=" ">
        <Card.Img
          variant="top"
          src={`${img}`}
          style={{ width: "9rem", height: "9rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">{nombre}</Card.Title>
          <Card.Title>precio:{precio}$</Card.Title>
        </Card.Body>
        <Button
          variant="outline-primary"
          className="ml-5"
          onClick={updateProduct}
        >
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
