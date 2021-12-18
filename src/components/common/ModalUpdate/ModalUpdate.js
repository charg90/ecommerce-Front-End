import { useContext } from "react";

import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../context/Product";
import { useNavigate } from "react-router-dom";
const ModalUpdate = ({ show, handlerHideModal, id }) => {
  const { state: producto, updateData } = useContext(ProductsContext);
  const token = localStorage.getItem("token");

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submitForm = (data) => {
    console.log(`products/${id}`);
    updateData(id, data, token);
    navigate(`/product/${id}`);
  };

  return (
    <Modal show={show} onHide={handlerHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="nombre"
              name="nombre"
              {...register("nombre")}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="precio"
              name="precio"
              {...register("precio")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text"
              placeholder="descripcion"
              name="descripcion"
              {...register("descripcion")}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handlerHideModal}>
          Cerrar
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit(submitForm)}
        >
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdate;
