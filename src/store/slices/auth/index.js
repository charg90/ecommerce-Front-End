import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAuth = createAsyncThunk("auth/getAuth", async (obj) => {
  try {
    const { data } = await axios.post("http://localhost:4501/api/login", obj);
    return data;
  } catch (err) {
    console.error(err);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    usuario: {
      nombre: "",
      email: "",
      uuid: "",
      confirmacion: null,
      id: "",
    },
    loading: false,
    status: null,
  },
  extraReducers: {
    [getAuth.pending]: (state, action) => {
      state.loading = true;
      state.status = "loading";
    },
    [getAuth.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.usuario = payload.usuario;
      state.loading = false;
      state.status = "success";
      localStorage.setItem("token", payload.token);
    },
    [getAuth.rejected]: (state, action) => {
      state.loading = false;
      state.status = "fail";
    },
  },
});

export default authSlice.reducer;
