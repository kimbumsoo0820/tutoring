import { setUserData, addUser, rollbackUser } from "../reducers/userSlice.js";
import apiCaller from "../../api/apiCaller.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUserData = () => async (dispatch) => {
//   try {
//     const res = await apiCaller.getUserData();
//     console.log(res);
//     // Promise를 반환하도록 setTimeout을 감싸기
//     await new Promise((resolve) =>
//       setTimeout(() => {
//         dispatch(setUserData(res));
//         resolve();
//       }, 3000)
//     );
//   } catch (error) {
//     console.error("Failed to fetch user data:", error);
//   }
// };

// 비동기 작업을 위한 thunk 생성
export const fetchUserData = createAsyncThunk(
  "users/fetchUserData",
  async () => {
    const response = await apiCaller.getUserData();
    return response.data; // API 응답의 데이터를 반환
  }
);

export const addNewUserData = (data) => (dispatch) => {
  console.log("action =>", data);
  dispatch(addUser(data));
};

export const rollBackUserData = (data) => (dispatch) => {
  dispatch(rollbackUser());
};
