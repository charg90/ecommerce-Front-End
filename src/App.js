import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import NavBar from "./components/common/navBar";
import Products from "./Pages/Productos";
import SingleProduct from "./Pages/SingleProduct";
import Verify from "./Pages/Verify";
import UserProfile from "./Pages/UserProfile";
import ProductoNuevo from "./Pages/ProductoNuevo";
import { AuthProvider } from "./context/Auth";
import { ProductProvider } from "./context/Product";
function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="/verify/:uid" element={<Verify />} />
            <Route path="/productoNuevo" element={<ProductoNuevo />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
