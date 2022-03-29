import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import genarelReducer from "./generalSlice";
const store = configureStore({
  reducer: {
    general: genarelReducer,
    auth: authSlice,
  },
});

export default store;
