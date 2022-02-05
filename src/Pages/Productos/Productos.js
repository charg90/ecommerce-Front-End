import { useGet } from "./../../customHooks/HTTP";
import { Container, Row } from "react-bootstrap";
import Producto from "./Producto";
import { PRODUCTS } from "./../../constants/constants";
import "./productos.css";

const Products = () => {
  const [{ products }] = useGet(PRODUCTS);

  return (
    <Container fluid className="">
      {products.map((p) => (
        <Producto {...p} key={p.id} />
      ))}
    </Container>
  );
};

export default Products;
