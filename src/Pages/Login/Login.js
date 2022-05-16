import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../../store/slices/auth";

const Login = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    dispatch(getAuth(data));
  };
  if (!!auth.auth) {
    navigate("/");
  }

  return (
    <Container fluid className="">
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
            {auth.status === "error" && (
              <p className="text-danger">Compruebe su email o contraseña</p>
            )}
          </Form>
        </Col>
        <p className="text-danger"></p>
      </Row>
    </Container>
  );
};

export default Login;
