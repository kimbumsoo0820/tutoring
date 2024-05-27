const ADD_USER = "ADD_USER";

export function addUserAction(userData) {
  return { type: ADD_USER, payload: userData };
}

const initialState = [
  {
    name: "홍길동",
    age: 20,
    address: "서울특별시",
  },
];

function userReducer(prevState = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_USER:
      return [...prevState, action.payload];
    default:
      return prevState;
  }
}

export default userReducer;
