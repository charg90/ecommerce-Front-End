import React, { createContext, useReducer } from "react";

import { productsReducer, initialState } from "../reducer/products";
import axios from "axios";
import { BASE_URl } from "./../constants/constants";

export const ProductsContext = createContext({
  products: () => {},
});

const { Provider } = ProductsContext;

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const products = async (id) => {
    try {
      const data = await axios.get(`${BASE_URl}/usuarios/${id}`);
      const productos = data.data.productos;

      dispatch({
        type: "FETCH_SUCCESS",
        payload: { data: productos },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const eliminateProduct = async (state, id, token) => {
    const newToken = JSON.parse(token);
    console.log(newToken);

    try {
      dispatch({
        type: "FETCH_ELIMINATE",
        payload: { data: state.products.filter((p) => p.id !== id) },
      });
      const deleteProduct = await axios.patch(`${BASE_URl}/productos/${id}`, {
        headers: { Authorization: newToken },
        content_type: "application/json",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const updateData = async (id, data, token) => {
    const newToken = JSON.parse(token);
    try {
      const updateProduct = await axios.put(
        `${BASE_URl}/productos/${id}`,
        data,
        {
          headers: { Authorization: newToken },
          content_type: "application/json",
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const addData = async (state, producto, token) => {
    const newToken = JSON.parse(token);
    try {
      dispatch({
        type: "FETCH_CREATE",
        payload: { data: state.concat(producto) },
      });
      const addProduct = await axios.post(`${BASE_URl}/productos`, producto, {
        headers: { Authorization: newToken },
        content_type: "application/json",
      });
      console.log(addProduct);
      return addProduct;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Provider
      value={{ state, products, eliminateProduct, addData, updateData }}
    >
      {children}
    </Provider>
  );
};
