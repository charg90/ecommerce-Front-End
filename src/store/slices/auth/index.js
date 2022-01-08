import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAuth = createAsyncThunk(
  "auth/getAuth",
  async (obj, { rejectWithValue }) => {
    try {
      const data = await axios.post("http://localhost:4501/api/login", obj);

      return data;
    } catch (err) {
      console.log(err);
      if (err) {
        return rejectWithValue(err);
      }
    }
  }
);

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
    auth: false,
  },
  extraReducers: {
    [getAuth.pending]: (state, action) => {
      state.loading = true;
      state.status = "pending";
      state.auth = false;
    },
    [getAuth.fulfilled]: (state, { payload }) => {
      state.token = payload.data.token;
      state.usuario = payload.data.usuario;
      state.loading = false;
      state.status = "success";
      state.auth = true;
      localStorage.setItem("token", payload.token);
    },
    [getAuth.rejected]: (state) => {
      state.loading = false;
      state.status = "error";
      state.auth = false;
    },
  },
});

export default authSlice.reducer;
