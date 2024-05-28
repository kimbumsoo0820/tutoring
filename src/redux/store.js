import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import userSlice from "./reducers/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
