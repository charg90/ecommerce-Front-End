import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuth = () => {
  const auth = useSelector((state) => state.auth);
  return auth;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  isAuth.status === "success" && <Outlet />;
};

export default ProtectedRoutes;
