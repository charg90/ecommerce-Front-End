import { useEffect, useReducer, useState } from "react";
import { productsReducer, initialState } from "./../reducer/products";
import {
  FETCHING,
  FETCH_SUCCESS,
  FETCH_ELIMINATE,
} from "../reducer/actions/products";
import axios from "axios";
import { BASE_URL } from "./../constants/constants";

export const useGet = (endpoint, token = null) => {
  const [data, setData] = useState("");
  const jwt = window.localStorage.getItem(`token`);
  const newToken = JSON.parse(token);
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const fetchData = async () => {
    try {
      const { data: result } = await axios.get(`${BASE_URL}/${endpoint}`, {
        headers: { Authorization: newToken },
        content_type: "application/json",
      });

      dispatch({
        type: FETCH_SUCCESS,
        payload: { data: result },
      });
      setData(result);
    } catch (err) {
      console.log(err);
    }
    return data;
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return [state, data];
};
export const updateData = async (endpoint, id, data) => {
  const token = window.localStorage.getItem(`token`);
  const newToken = JSON.parse(token);

  try {
    const { data: result } = await axios.put(
      `${BASE_URL}/${endpoint}/${id}`,
      data,
      { headers: { Authorization: newToken }, content_type: "application/json" }
    );
    return result;
  } catch (err) {
    console.log(err);
  }
};
export const useDeleteData = async (endpoint, id) => {
  const token = window.localStorage.getItem(`token`);
  const newToken = JSON.parse(token);
  const [state, dispatch] = useReducer(productsReducer, initialState);

  try {
    const data = await axios.delete(`${BASE_URL}/${endpoint}/${id}`, {
      headers: { Authorization: newToken },
      content_type: "application/json",
    });
    console.log(data.data.id);
    dispatch({
      type: FETCH_ELIMINATE,
    });

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const usePost = (endpoint, obj) => {
  /*
  const token = window.localStorage.getItem(`token`);
  const newToken = JSON.parse(token);
  */
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const postData = async () => {
    try {
      console.log(endpoint, obj);
      const data = await axios.post(`${BASE_URL}/${endpoint}`, obj);
      setData(data);
    } catch (err) {
      console.log(err);
      setError(err);
    }
    return data, error;
  };
  useEffect(() => {
    postData();
  }, [endpoint]);

  return [data, error];
};
