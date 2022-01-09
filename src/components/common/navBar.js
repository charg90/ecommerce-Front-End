import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import "./navBar.css";
import { useSelector } from "react-redux";
const NavTop = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Navbar sticky="top" expand="sm" className="navBarBg">
      <Navbar.Toggle className="" />

      <Navbar.Collapse>
        <Navbar.Brand className="brandLetter    " href="/">
          MERCADO GAMER
        </Navbar.Brand>
        <div className="d-flex flex-column justify-content-center">
          <Nav>
            <Nav.Link>
              <Link to="/login" className="navLink">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register" className="navLink">
                Registro
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products" className="navLink">
                Productos
              </Link>
            </Nav.Link>
            <Form className="d-flex px-2">
              <Form.Control type="search" placeholder="Encuentra Aqui" />
              <Button className="navButton btn px-3" size="sm">
                Buscar...
              </Button>
            </Form>
            {!!auth.auth && (
              <NavDropdown
                title={`Bienvenido ${auth.usuario?.nombre}`}
                className="navLink"
              >
                <NavDropdown.Item>
                  <Link to={`/profile/${auth.usuario.id}`} className="navLink">
                    Mi perfil
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/profile/id" className="navLink">
                    Log Out
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTop;
