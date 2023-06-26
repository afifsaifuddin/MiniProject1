import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./Reducer/Authreducer";

export const store = configureStore({
  reducer: {
    authreducer: authreducer,
  },
});
