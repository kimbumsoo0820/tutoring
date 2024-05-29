import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
