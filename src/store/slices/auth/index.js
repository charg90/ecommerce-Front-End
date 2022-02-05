import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, LOGIN } from "../../../constants/constants";

export const getAuth = createAsyncThunk(
  "auth/getAuth",
  async (obj, { rejectWithValue }) => {
    try {
      const data = await axios.post(`${BASE_URL}/${LOGIN}`, obj);

      window.localStorage.setItem("jwt", JSON.stringify(data.data.token));

      return data;
    } catch (err) {
      console.log(err);
      if (err) {
        console.log(err);
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
      img: "",
    },
    loading: false,
    status: null,
    auth: false,
  },
  reducers: {
    logOut: (state, action) => {
      console.log("hol");
      state.loading = false;
      state.status = "succes";
      state.auth = false;
    },
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
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
