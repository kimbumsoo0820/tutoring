import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "../actions/userAction";
const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    setUserData(state, action) {
      return action.payload;
    },
    rollbackUser(state, action) {
      console.log(state);
      state.pop();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        console.log("pending");
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("fulfilled", action);
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        console.log("rejected");

        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser, setUserData, rollbackUser } = userSlice.actions;
export default userSlice.reducer;
