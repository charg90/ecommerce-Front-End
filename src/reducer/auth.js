import {
  FETCHING,
  FETCH_SUCCESS,
  SET_OUT_USER,
  FETCH_ERROR,
} from "./actions/auth";

export const initialState = {
  auth: false,
  token: "",
  usuario: {},
  error: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        initialState,
      };
    case FETCH_SUCCESS:
      return {
        auth: true,
        token: action.payload.token,
        usuario: action.payload.usuario,
        errors: false,
      };
    case SET_OUT_USER:
      return {
        fetching: false,
        token: "",
        usuario: "",
        error: false,
      };
    case FETCH_ERROR:
      return {
        ...initialState,
        error: true,
      };
    default:
      return state;
  }
}
