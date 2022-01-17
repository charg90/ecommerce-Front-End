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

  useEffect(() => {
    dispatch(getProducts(id));
  }, []);
  return (
    <Container className=" ">
      <Row
        className="mt-5 letras d-flex justify-content-around "
        style={{ width: "25%" }}
      >
        <Col lg={6}>
          <Image src={usuario.img} style={{ width: "6rem", height: "6rem" }} />
          <p>imagen</p>
        </Col>
        <Col lg={6}>
          <p>hola</p>
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
