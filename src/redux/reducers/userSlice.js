import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./userActions";
const initialState = [
  //   {
  //     name: "홍길동",
  //     age: 20,
  //     address: "서울특별시",
  //   },
];

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
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.initialState = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.initialState = action.error.message;
      });
  },
});

export const { addUser, setUserData, rollbackUser } = userSlice.actions;
export default userSlice.reducer;
