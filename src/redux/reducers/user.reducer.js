const ADD_USER = "ADD_USER";
export const SET_USER_DATA = "SET_USER_DATA";

export function addUserAction(userData) {
  return { type: ADD_USER, payload: userData };
}
export function setUserData(userData) {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
}

const initialState = [
  {
    name: "홍길동",
    age: 20,
    address: "서울특별시",
  },
];

function userReducer(prevState = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [...prevState, action.payload];
    case SET_USER_DATA:
      return action.payload;
    default:
      return prevState;
  }
}

export default userReducer;
