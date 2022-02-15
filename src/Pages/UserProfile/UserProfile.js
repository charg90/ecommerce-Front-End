import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Button, Col, Image, Spinner } from "react-bootstrap";
import { getProducts, delProducts } from "./../../store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import ProfileProducts from "./ProfileProducts";
import "./userProfile.css";
import Spinners from "../../components/common/spinner/Spinner";
const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { producto } = useSelector((state) => state.products);
  const { usuario } = useSelector((state) => state.auth);

  const handlerClick = () => {
    navigate("/productoNuevo");
  };

  const eliminateProduct = (id) => {
    console.log(id);
    dispatch(delProducts(id));
  };

  useEffect(() => {
    dispatch(getProducts(id));
  }, []);

  producto.loading && <Spinners />;
  return (
    <Container fluid className="vh-100 bgColor">
      <Row className=" letras  rowUserProfile d-flex justify-content-center    ">
        <Col lg={6} md={6} sm={12} className="d-flex mt-5 ">
          <Row>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Image
                src={usuario.img}
                className="imgUserProfile rounded-circle border border-5-primary"
              />
            </Col>
            <Col lg={6} md={6} sm={6}>
              <p className="">
                Nombre:<span className="text-dark ">{usuario.nombre}</span>
              </p>
              <p className="text">
                Email:<span className="text-dark">{usuario.email}</span>
              </p>
              <Button onClick={handlerClick} className="mx-5">
                Vender
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-3  justify-content-center letras h-25">
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
