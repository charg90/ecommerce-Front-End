import { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../context/Auth";
import { useNavigate } from "react-router-dom";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import "./login.css";

const Login = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
              {errors.email && (
                <span className="text-danger">Correo no valido</span>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="*********"
                name="password"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-danger">password requerido</span>
              )}
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
