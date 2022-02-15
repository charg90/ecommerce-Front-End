import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, PERFIL, PRODUCTS } from "../../../constants/constants";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (id, { rejectWithValue }) => {
    const jwt = localStorage.getItem("jwt");
    const token = JSON.parse(jwt);
    console.log(token);
    try {
      const { data } = await axios.get(`${BASE_URL}/${PERFIL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        content_type: "application/json",
      });
      const newData = data.filter((d) => d.eliminado === false);
      console.log(newData);
      return newData;
    } catch (err) {
      console.log(err);
      rejectWithValue(err);
    }
  }
);
export const addProducts = createAsyncThunk(
  "productos/addProducts",
  async (obj, { rejectWithValue }) => {
    const jwt = localStorage.getItem("jwt");
    const token = JSON.parse(jwt);
    console.log(`Bearer ${token}`);
    try {
      const { data } = await axios.post(`${BASE_URL}/${PRODUCTS}`, obj, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (err) {
      console.log(err);
      rejectWithValue(err);
    }
  }
);
export const delProducts = createAsyncThunk(
  "productos/delProducts",
  async (id, { rejectWithValue }) => {
    const jwt = localStorage.getItem("jwt");
    const token = JSON.parse(jwt);
    try {
      const { data } = await axios.patch(`${BASE_URL}/${PRODUCTS}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (err) {
      console.log(err);
      rejectWithValue(err);
    }
  }
);
export const updateProducts = createAsyncThunk(
  "productos/updateProducts",
  async (obj, { rejectWithValue }) => {
    console.log(obj);
    const jwt = localStorage.getItem("jwt");
    const token = JSON.parse(jwt);
    try {
      const { data } = await axios.put(
        `${BASE_URL}/${PRODUCTS}/${obj.product}`,
        obj,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data);
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
    producto: [],
    loading: false,
    status: null,
  },

  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.producto = payload;
      state.loading = false;
      state.stutus = "success";
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.status = "error";
    },
    [addProducts.pending]: (state, action) => {
      state.loading = true;
      state.loading = "loading";
    },
    [addProducts.fulfilled]: (state, { payload }) => {
      state.loading = "false";
      state.producto = [...state.producto, payload];
      state.success = "success";
    },
    [addProducts.rejected]: (state, action) => {
      state.loading = "false";
      state.status = "error";
    },
    [delProducts.pending]: (state, action) => {
      state.loading = true;
      state.loading = "loading";
    },
    [delProducts.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = "false";
      state.producto = state.producto.filter((p) => p.id !== payload.id);
      state.success = "success";
    },
    [delProducts.rejected]: (state, action) => {
      state.loading = "false";
      state.status = "error";
    },
    [updateProducts.pending]: (state, action) => {
      state.loading = true;
      state.loading = "loading";
    },
    [updateProducts.fulfilled]: (state, { payload }) => {
      state.loading = "false";
      state.producto = state.producto.map((p) => {
        if (p.id == payload.id) {
          return { ...p, ...payload };
        }
      });
      state.success = "success";
    },
    [updateProducts.rejected]: (state, action) => {
      state.loading = "false";
      state.status = action.payload;
    },
  },
});

export default productsSlice.reducer;
