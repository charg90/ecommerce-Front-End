import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "./../../store/slices/auth/index";
const NavTop = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Navbar sticky="top" expand="sm" className="navBarBg ">
      <Navbar.Brand className="brandLetter   " href="/">
        MERCADO GAMER
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className=" justify-content-end">
        <Nav className=" ">
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

          {!!auth.auth && (
            <NavDropdown
              title={`Bienvenido ${auth.usuario?.nombre}`}
              className="navLink    "
            >
              <NavDropdown.Item>
                <Link to={`/profile/${auth.usuario.id}`} className="navLink">
                  Mi perfil
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navLink"
                onClick={() => dispatch(logOut())}
              >
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default React.memo(NavTop);
