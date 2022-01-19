import { useState } from "react";
import axios from "axios";

import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "./../../store/slices/products";

const ProductoNuevo = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [imgUrl, setImgUrl] = useState("");

  const submitForm = async (data) => {
    const formData = new FormData();
    formData.append("file", data.imagen[0]);
    formData.append("upload_preset", "sgpqsyxq");

    try {
      const { data: info } = await axios.post(
        "https://api.cloudinary.com/v1_1/del3mby9y/image/upload",
        formData
      );
      setImgUrl(info.url);

      const obj = {
        nombre: data.nombre,
        precios: data.precio,
        descripcion: data.descripcion,
        img: imgUrl,
      };
      dispatch(addProduct(obj));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center mt-5">
        <Col md={6} className="text-center">
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
