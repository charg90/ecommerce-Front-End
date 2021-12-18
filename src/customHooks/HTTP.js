import { useEffect, useReducer } from "react";
import { productsReducer, initialState } from "./../reducer/products";
import {
  FETCHING,
  FETCH_SUCCESS,
  FETCH_ELIMINATE,
} from "../reducer/actions/products";
import axios from "axios";
import { BASE_URl } from "./../constants/constants";

export const useFetch = (endpoint) => {
  const token = window.localStorage.getItem(`token`);
  const newToken = JSON.parse(token);
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const fetchData = async () => {
    try {
      const { data: result } = await axios.get(`${BASE_URl}/${endpoint}`, {
        headers: { Authorization: newToken },
        content_type: "application/json",
      });

      dispatch({
        type: FETCH_SUCCESS,
        payload: { data: result },
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return [state];
};
export const updateData = async (endpoint, id, data) => {
  const token = window.localStorage.getItem(`token`);
  const newToken = JSON.parse(token);

  try {
    const { data: result } = await axios.put(
      `${BASE_URl}/${endpoint}/${id}`,
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
    const data = await axios.delete(`${BASE_URl}/${endpoint}/${id}`, {
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
