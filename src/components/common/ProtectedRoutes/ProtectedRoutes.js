import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuth = () => {
  const auth = useSelector((state) => state.auth);

  return auth;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth.auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
