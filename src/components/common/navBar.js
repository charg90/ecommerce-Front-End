import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/Auth";
import { Container, Row, Col } from "react-bootstrap";
import { navBar, navItems, link } from "./navBar.css";
const NavBar = () => {
  const { state } = useContext(AuthContext);

  return (
    <Container fluid>
      <Row className="navBar d-flex align-items-center justify-content-around ">
        <Col md={4} className="text-center navItems">
          <Link to="/login" className="link">
            Login
          </Link>
        </Col>
        <Col md={4} className="texte-center navItems">
          <Link to="/register" className="link">
            Registro
          </Link>
        </Col>
        <Col md={4} className="navItems ">
          <p>
            Bienvenido {state?.usuario.nombre}
            {!!state.auth ? (
              <Link to={`/profile/${state.usuario.id}`} className="px-3">
                MI Perfil
              </Link>
            ) : null}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
