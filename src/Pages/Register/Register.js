import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { newUser } from "./../../customHooks/newUser";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import "./register.css";

const Register = () => {
  const [response, setResponse] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data) => {
    console.log(data);

    const obj = new FormData();
    obj.append("file", data.avatar[0]);
    obj.append("upload_preset", "sgpqsyxq");

    try {
      const { data: info } = await Axios.post(
        "https://api.cloudinary.com/v1_1/del3mby9y/image/upload",
        obj
      );

      const finalObj = {
        nombre: data.nombre,
        email: data.email,
        password: data.password,
        img: info.url,
      };
      const last = await newUser(finalObj);

      last
        ? setResponse("en breve te llegara un mail para confimar ")
        : setResponse("este mail ya esta registrado");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container fluid className="  ">
      <Row className="d-flex justify-content-center  ">
        <Col md={6} className="mt-5">
          <Form
            onSubmit={handleSubmit(submitForm)}
            enctype="multipart/form-data"
          >
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholde="Nombre"
                name="nombre"
                {...register("nombre")}
              />
              {errors.register && (
                <span className="text-danger">campo requerido</span>
              )}
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
            {errors.email && (
              <span className="text-danger">campo requerido</span>
            )}
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholde="password"
                name="password"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-danger">campo requerido</span>
              )}
              <Form.Group>
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  type="file"
                  name="avatar"
                  {...register("avatar")}
                />
              </Form.Group>
            </Form.Group>
            <Button type="submit" className=" mt-2">
              Registrame
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center  show">
          <p>{response}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
