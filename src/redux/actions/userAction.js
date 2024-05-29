import { setUserData, addUser, rollbackUser } from "../reducers/userSlice.js";
import apiCaller from "../../api/apiCaller.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 비동기 작업을 위한 thunk 생성
export const fetchUserData = createAsyncThunk(
  "users/fetchUserData",
  async () => {
    const response = await apiCaller.getUserData();
    return response; // API 응답의 데이터를 반환
  }
);

export const addNewUserData = (data) => (dispatch) => {
  console.log("action =>", data);
  dispatch(addUser(data));
};

export const rollBackUserData = (data) => (dispatch) => {
  dispatch(rollbackUser());
};
