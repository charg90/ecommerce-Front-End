import { useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../context/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { authenticate } = useContext(AuthContext);
  let navigate = useNavigate();

  const submitForm = (data) => {
    authenticate({
      email: data.email,
      password: data.password,
    });
    navigate("/products");
  };
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center text-center">
        <Col md={4}>
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
            <Button type="submit">Ingresar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
