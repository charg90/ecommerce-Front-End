import { Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./producto.css";
const Producto = ({ nombre, usuario, precio, id, img }) => {
  const navigate = useNavigate();
  const { producto } = useSelector((state) => state.products);

  const handlerClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Col md={12} className="mt-5 border-bottom  ">
      <Row className="d-flex justify-content-center align-items-center ">
        <Col md={4} className="d-flex justify-content-center">
          <Image src={img} alt="no se encontro" className="img-style" />
        </Col>

        <Col md={6} className="letras">
          <h2>{nombre}</h2>
          <h5>precio:{precio}$</h5>
          <h6>vendedor:{usuario.nombre}</h6>
        </Col>

        <Col md={2} className="text-center">
          <Button type="submit" onClick={handlerClick}>
            Ver mas
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default Producto;
