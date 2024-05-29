import { createSlice } from "@reduxjs/toolkit";

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
});

export const { addUser, setUserData, rollbackUser } = userSlice.actions;
export default userSlice.reducer;
