import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth/index";

export default configureStore({
  reducer: {
    auth,
  },
});
