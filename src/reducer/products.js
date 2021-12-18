import {
  FETCHING,
  FETCH_SUCCESS,
  FETCH_ELIMINATE,
  FETCH_CREATE,
} from "./actions/products";

export const initialState = {
  fetching: true,
  products: [],
  errors: false,
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_SUCCESS:
      return {
        fetching: false,
        products: action.payload.data,
        errors: false,
      };
    case FETCH_ELIMINATE:
      return {
        fetching: false,
        products: action.payload.data,
        error: false,
      };
    case FETCH_CREATE:
      return {
        fetching: false,
        products: action.payload.data,
        errors: false,
      };
    default:
      return state;
  }
}
