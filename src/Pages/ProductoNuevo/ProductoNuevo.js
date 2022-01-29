import { useState, useEffect } from "react";
import axios from "axios";

import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "./../../store/slices/products";
import "./productoNuevo.css";

const ProductoNuevo = () => {
  const { usuario } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    const formData = new FormData();
    formData.append("file", data.imagen[0]);
    formData.append("upload_preset", "sgpqsyxq");

    try {
      const { data: info } = await axios.post(
        "https://api.cloudinary.com/v1_1/del3mby9y/image/upload",
        formData
      );

      const obj = {
        nombre: data.nombre,
        precio: data.precio,
        descripcion: data.descripcion,
        img: info.url,
        usuario: usuario.id,
      };

      const articulo = dispatch(addProducts(obj));
      console.log(articulo);

      articulo && navigate(`/profile/${usuario.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid className="bg-color ">
      <Row className="d-flex justify-content-center  ">
        <Col md={6} className="text-center mt-5">
          <Form enctype="multipart/form-data">
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
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" {...register("imagen")} />
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
