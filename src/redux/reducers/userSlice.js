import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "홍길동",
    age: 20,
    address: "서울특별시",
  },
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
  },
});

export const { addUser, setUserData } = userSlice.actions;
export default userSlice.reducer;
