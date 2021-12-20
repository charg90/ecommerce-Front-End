import React, { createContext, useReducer } from "react";

import authReducer, { initialState } from "./../reducer/auth";
import axios from "axios";
import { BASE_URl } from "./../constants/constants";

export const AuthContext = createContext({
  auth: null,
  authenticate: () => {},
  logOut: () => {},
});

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  console.log(state);
  const authenticate = async (obj) => {
    try {
      const data = await axios.post(`${BASE_URl}/login`, obj);

      const token = `Bearer ${data.data.token}`;
      const usuario = data.data.usuario;
      window.localStorage.setItem("token", JSON.stringify(token));
      dispatch({ type: "FETCH_SUCCESS", payload: { token, usuario } });

      return data;
    } catch (err) {
      console.log(err);
      dispatch({
        type: "FETCH_ERROR",
      });
      return err;
    }

    //setear el storage
  };

  return <Provider value={{ state, authenticate }}>{children}</Provider>;
};
