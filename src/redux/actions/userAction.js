import { setUserData, addUser, rollbackUser } from "../reducers/userSlice.js";
import apiCaller from "../../api/apiCaller.js";

export const fetchUserData = () => async (dispatch) => {
  try {
    const res = await apiCaller.getUserData();
    console.log(res);
    dispatch(setUserData(res));
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};

export const addNewUserData = (data) => (dispatch) => {
  console.log("action =>", data);
  dispatch(addUser(data));
};

export const rollBackUserData = (data) => (dispatch) => {
  dispatch(rollbackUser());
};
