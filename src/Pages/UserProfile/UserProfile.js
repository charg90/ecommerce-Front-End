import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Card, Button, Col, Image } from "react-bootstrap";
import { getProducts } from "./../../store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import ProfileProducts from "./ProfileProducts";
import "./userProfile.css";
const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { producto } = useSelector((state) => state.products);
  const { usuario } = useSelector((state) => state.auth);

  const handlerClick = () => {
    console.log("clik");
    navigate("/productoNuevo");
  };

  useEffect(() => {
    dispatch(getProducts(id));
  }, []);
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="mt-5 letras d-flex justify-content-center rowUserProfile">
        <Col lg={6} md={4} sm={12} className=" d-flex ">
          <Image src={usuario.img} className="imgUserProfile" />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <p>
            Nombre:<span className="text-dark">{usuario.nombre}</span>
          </p>
          <p>
            Email:<span className="text-dark">{usuario.email}</span>
          </p>
          <Button onClick={handlerClick}>Vender</Button>
        </Col>
      </Row>

      <Row className="mt-5 d-flex justify-content-center letras">
        {producto.map((p) => (
          <ProfileProducts {...p} key={p.id} />
        ))}
      </Row>
    </Container>
  );
};

export default UserProfile;
