import { useContext } from "react";

import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../context/Product";
import { useNavigate } from "react-router-dom";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalUpdate = ({ show, handlerHideModal, id }) => {
  const { state: producto, updateData } = useContext(ProductsContext);
  const token = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
            {errors.nombre && (
              <span className="text-danger">nombre requeridio</span>
            )}
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
          {errors.precio && (
            <span className="text-danger">precio requeridio</span>
          )}
          <Form.Group>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text"
              placeholder="descripcion"
              name="descripcion"
              {...register("descripcion")}
            />
            {errors.descripcion && (
              <span className="text-danger">descripcion requerida</span>
            )}
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
