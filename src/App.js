import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import NavTop from "./components/common/navBar";
import Products from "./Pages/Productos";
import SingleProduct from "./Pages/SingleProduct";
import Verify from "./Pages/Verify";
import UserProfile from "./Pages/UserProfile";
import ProductoNuevo from "./Pages/ProductoNuevo";
import UpdateProduct from "./Pages/UpdateProduct";
import Footer from "./components/common/Footer";
import ProtectedRoutes from "./components/common/ProtectedRoutes/ProtectedRoutes";
//redux
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="/productoNuevo" element={<ProductoNuevo />} />
            <Route path="/updateProduct/:id" element={<UpdateProduct />} />
          </Route>
          <Route path="/verify/:uid" element={<Verify />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/*
        <Footer />
        */}
      </Router>
    </Provider>
  );
}

export default App;
