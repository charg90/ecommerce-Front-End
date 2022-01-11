import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Card, Button } from "react-bootstrap";
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
    <Container fluid className="container">
      <Row className="mt-5 letras d-flex justify-content-around">
        <Card style={{ width: "20rem" }} className="mb-4">
          <Card.Body>
            <Card.Title className="text-center">Mis Datos</Card.Title>

            <Card.Text>nombre:{usuario.nombre}</Card.Text>
            <Card.Text>email:{usuario.email}</Card.Text>
          </Card.Body>
        </Card>
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
