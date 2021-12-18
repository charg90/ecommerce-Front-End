import { SET_USER } from "./actions/user";

export const initialState = {
  user: "",
  password: "",
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        email: action.payload.user,
        password: action.payload.password,
      };
    default:
      return state;
  }
}
