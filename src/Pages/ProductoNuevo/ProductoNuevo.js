import { useContext } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ProductoNuevo = () => {
  const { register, handleSubmit } = useForm();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const submitForm = async (data) => {};
  return (
    <Container>
      <Row className="d-flex justify-content-center mt-5">
        <Col md={6} className="text-center">
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
            <Button onClick={handleSubmit(submitForm)} className="mt-2">
              Agregar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductoNuevo;
