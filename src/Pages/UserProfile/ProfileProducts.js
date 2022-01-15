import { useState } from "react";
import ModalUpdate from "../../components/common/ModalUpdate";
import { Col, Card, Button } from "react-bootstrap";
import "./userProfile.css";
const ProfileProducts = ({
  nombre,
  precio,
  descripcion,
  id,
  eliminateProduct,
  productos,
}) => {
  const [show, setShow] = useState(false);
  const handlerUpdateModal = () => setShow(true);
  const handlerHideModal = () => setShow(false);
  const deleteProduct = () => {
    eliminateProduct(id);
  };
  return (
    <Col lg={3} md={4} sm={12}>
      <Card className="mx-2 card d-flex">
        <Card.Body>
          <Card.Title className="card-title">{nombre}</Card.Title>
          <Card.Title>precio:{precio}$</Card.Title>
          <Card.Title>descripcion:{descripcion}</Card.Title>
          <Button>Vender Ya</Button>
        </Card.Body>
        <Button
          variant="outline-primary"
          className="ml-5"
          onClick={handlerUpdateModal}
        >
          Editar
        </Button>
        <Button variant="outline-danger" onClick={deleteProduct}>
          Eliminar
        </Button>
      </Card>
      <ModalUpdate show={show} handlerHideModal={handlerHideModal} id={id} />
    </Col>
  );
};

export default ProfileProducts;
