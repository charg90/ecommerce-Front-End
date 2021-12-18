import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProfileProducts from "./ProfileProducts";
import { ProductsContext } from "../../context/Product";

const UserProfile = () => {
  const navigate = useNavigate();
  const { state } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const {
    state: productos,
    products,
    eliminateProduct,
  } = useContext(ProductsContext);
  console.log(productos);
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
    <Container>
      <Row>
        <Col md={5}>
          <p>image</p>
        </Col>
        <Col md={5}>
          <p>nombre:{state.usuario.nombre}</p>
          <p>email:{state.usuario.email}</p>
        </Col>
        <Col md={2}>
          <Button onClick={createProduct}>Vender YA</Button>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-center">
        {articulos?.map((p) => (
          <ProfileProducts {...p} key={p.id} eliminateProduct={deleteProduct} />
        ))}
      </Row>
    </Container>
  );
};

export default UserProfile;
