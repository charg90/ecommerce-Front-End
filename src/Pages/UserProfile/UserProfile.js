import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Button, Card, Col, Image } from "react-bootstrap";
import { getProducts, delProducts } from "./../../store/slices/products";
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

  const eliminateProduct = (id) => {
    console.log(id);
    dispatch(delProducts(id));
  };

  useEffect(() => {
    dispatch(getProducts(id));
  }, []);
  return (
    <Container>
      <Row className="mt-5 letras  rowUserProfile d-flex justify-content-center ">
        <Col lg={6} md={4} sm={12} className="  ">
          <Image src={usuario.img} className="imgUserProfile" />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <p className="mx-5">
            Nombre:<span className="text-dark ">{usuario.nombre}</span>
          </p>
          <p className="mx-5">
            Email:<span className="text-dark">{usuario.email}</span>
          </p>
          <Button onClick={handlerClick} className="mx-5">
            Vender
          </Button>
        </Col>
      </Row>

      <Row className="mt-5  justify-content-center letras">
        {producto.map((p) => (
          <ProfileProducts
            {...p}
            key={p.id}
            eliminateProduct={eliminateProduct}
          />
        ))}
      </Row>
    </Container>
  );
};

export default UserProfile;
