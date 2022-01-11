import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, PERFIL } from "../../../constants/constants";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (id, { rejectWithValue }) => {
    const jwt = localStorage.getItem("jwt");
    const token = JSON.parse(jwt);
    try {
      const { data } = await axios.get(`${BASE_URL}/${PERFIL}/${id}`, {
        headers: { Authorization: token },
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
      state.loading = "loading";
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
  },
});

export default productsSlice.reducer;
