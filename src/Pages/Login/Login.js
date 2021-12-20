import { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../context/Auth";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const { authenticate } = useContext(AuthContext);
  let navigate = useNavigate();

  const submitForm = async (data) => {
    try {
      const auth = await authenticate({
        email: data.email,
        password: data.password,
      });
      console.log(auth);
      auth.status === 200
        ? navigate("/products")
        : setError("Mail o contraseña incorrectos");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container fluid className="contenedor">
      <Row className=" justify-content-center text-center">
        <Col md={4} className="mt-5">
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="ingrese su email"
                name="email"
                {...register("email")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="*********"
                name="password"
                {...register("password")}
              />
            </Form.Group>
            <Button type="submit" className="mt-2">
              Ingresar
            </Button>
          </Form>
        </Col>
        <p className="text-danger">{error}</p>
      </Row>
    </Container>
  );
};

export default Login;
