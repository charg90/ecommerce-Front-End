import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, PRODUCTS } from "../../../constants/constants";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (endpoint, { rejectWithValue }) => {
    const jwt = localStorage.getItem("jwt");
    const token = JSON.parse(jwt);
    try {
      const data = await axios.get(`${BASE_URL}/${PRODUCTS}`, {
        headers: { Authorization: token },
        content_type: "application/json",
      });
      console.log(BASE_URL, PRODUCTS);

      return data;
    } catch (err) {
      console.log(err);
      rejectWithValue(err);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    nombre: "",
    precio: "",
    descripcion: "",
    loading: false,
    status: null,
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
      state.loading = "loading";
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.nombre = payload.data.nombre;
      state.precio = payload.data.precio;
      state.descripcion = payload.data.descripcion;
      state.loading = false;
      state.stutus = "success";
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.status = "error";
    },
  },
});

export default productsSlice.reducer;
