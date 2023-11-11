import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  reducer: {
    [api.reducerPath]: api.reducer,
  },
});
