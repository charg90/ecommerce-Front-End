import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth/index";
import products from "./slices/products";

export default configureStore({
  reducer: {
    auth,
    products,
  },
});
