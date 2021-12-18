import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { useFetch } from "./../../customHooks/HTTP";
import { Container, Row } from "react-bootstrap";
import Producto from "./Producto";

const Products = () => {
  const { state } = useContext(AuthContext);
  const [{ products }] = useFetch("productos");
  const navigate = useNavigate();
  const invalidUser = () => {
    navigate("/");
  };

  return (
    <Container>
      {state.auth ? (
        <Row>
          {products.map((p) => (
            <Producto {...p} key={p.id} />
          ))}
        </Row>
      ) : (
        invalidUser()
      )}
    </Container>
  );
};

export default Products;
