import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/Auth";
import { Container, Row, Col } from "react-bootstrap";
const NavBar = () => {
  const { state } = useContext(AuthContext);

  return (
    <Container>
      <Row>
        <Col md={6} className="d-flex justify-content-evenly">
          <Link to="/login">Login</Link>
          <Link to="/register">register</Link>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <p>bienvenido {state?.usuario.nombre}</p>
          {!!state.auth ? (
            <Link to={`/profile/${state.usuario.id}`}>MI perfil</Link>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
