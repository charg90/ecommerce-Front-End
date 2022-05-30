import { useGet } from "./../../customHooks/HTTP";
import { Container } from "react-bootstrap";
import Producto from "./Producto";
import { PRODUCTS } from "./../../constants/constants";
import "./productos.css";

const Products = () => {
  const [{ products }] = useGet(PRODUCTS);

  return (
    <Container className="bg-white mt-5">
      {products.map((p) => (
        <Producto {...p} key={p.id} />
      ))}
    </Container>
  );
};

export default Products;
