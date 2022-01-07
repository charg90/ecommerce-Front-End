import { useContext } from "react";

import { useFetch } from "./../../customHooks/HTTP";
import { Container, Row } from "react-bootstrap";
import Producto from "./Producto";
import "./productos.css";

const Products = () => {
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
