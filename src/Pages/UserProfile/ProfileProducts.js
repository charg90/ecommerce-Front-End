import { useState } from "react";
import ModalUpdate from "../../components/common/ModalUpdate";
import { Col, Card, Button } from "react-bootstrap";
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
    <Col md={4}>
      <Card style={{ width: "20rem", height: "15rem" }}>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Title>precio:{precio}$</Card.Title>
          <Card.Title>descripcion:{descripcion}</Card.Title>

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
        </Card.Body>
      </Card>
      <ModalUpdate show={show} handlerHideModal={handlerHideModal} id={id} />
    </Col>
  );
};

export default ProfileProducts;
