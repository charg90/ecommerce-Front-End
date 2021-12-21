import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProfileProducts from "./ProfileProducts";
import { ProductsContext } from "../../context/Product";
import "./userProfile.css";
const UserProfile = () => {
  const navigate = useNavigate();
  const { state } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const {
    state: productos,
    products,
    eliminateProduct,
  } = useContext(ProductsContext);

  const { id } = useParams();

  const articulos = productos.products;

  const deleteProduct = (id) => {
    eliminateProduct(productos, id, token);
  };
  useEffect(() => {
    products(id);
  }, [state]);

  const createProduct = () => {
    navigate("/productoNuevo");
  };

  return (
    <Container className="container">
      <Row className="mt-5 border letras">
        <Col md={5} className="d-flex align-items-center">
          <p>image</p>
        </Col>
        <Col md={5}>
          <p>nombre:{state.usuario.nombre}</p>
          <p>email:{state.usuario.email}</p>
        </Col>
        <Col md={2} className="d-flex align-items-center">
          <Button onClick={createProduct}>Vender YA</Button>
        </Col>
      </Row>

      <Row className="mt-5 d-flex justify-content-center letras">
        {articulos?.map((p) => (
          <ProfileProducts {...p} key={p.id} eliminateProduct={deleteProduct} />
        ))}
      </Row>
    </Container>
  );
};

export default UserProfile;
