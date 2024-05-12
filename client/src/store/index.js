import { configureStore } from "@reduxjs/toolkit";
import AuthReducers from "../slice/auth";

export default configureStore({
  reducer: {
    auth: AuthReducers,
  },
  devTools: process.env.NODE_ENV !== "production",
});
