import { useContext } from "react";

import { AuthContext } from "../../context/Auth";
import { useFetch } from "./../../customHooks/HTTP";
import { Container, Row } from "react-bootstrap";
import Producto from "./Producto";
import "./productos.css";

const Products = () => {
  const { state } = useContext(AuthContext);
  const [{ products }] = useFetch("productos");

  return (
    <Container fluid className="contenedor">
      <Row>
        {products.map((p) => (
          <Producto {...p} key={p.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
