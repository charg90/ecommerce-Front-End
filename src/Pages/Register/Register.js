import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { newUser } from "./../../customHooks/newUser";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const submitForm = (data) => {
    const obj = {
      nombre: data.nombre,
      email: data.email,
      password: data.password,
    };
    newUser("usuarios", obj);
    navigate("/login");
  };
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholde="Nombre"
                name="nombre"
                {...register("nombre")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholde="Email"
                name="email"
                {...register("email")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholde="password"
                name="password"
                {...register("password")}
              />
            </Form.Group>
            <Button type="submit" className=" mt-2">
              Registrame
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
