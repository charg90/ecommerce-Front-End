import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "./../../store/slices/products";
import axios from "axios";
import "./updateProduct.css";
const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector((state) => state.products.producto);
  const p = product.find((pro) => pro.id == id);
  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    const formData = new FormData();
    formData.append("file", data.image[0]);
    formData.append("upload_preset", "sgpqsyxq");
    try {
      
      const { data: info } = await axios.post(
        "https://api.cloudinary.com/v1_1/del3mby9y/image/upload",
        formData
      );
      const obj = {
        product: id,
        nombre: data.nombre,
        precio: data.precio,
        descripcion: data.descripcion,
        img: info.url,
        usuario: p.usuario,
      };

      dispatch(updateProducts(obj));
      

      navigate(`/product/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid className="vh-100 backgroundStyle">
      <Row className="d-flex justify-content-center ">
        <Col md={6} className="text-center mt-5">
          <Form enctype="multipart/form-data">
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder={`${p.nombre}`}
                name="nombre"
                {...register("nombre")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder={`${p.precio}`}
                name="precio"
                {...register("precio")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                placeholder={`${p.descripcion}`}
                name="descripcion"
                {...register("descripcion")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" {...register("image")} />
            </Form.Group>
            <Button onClick={handleSubmit(submitForm)} className="mt-2">
              Modificar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateProduct;
