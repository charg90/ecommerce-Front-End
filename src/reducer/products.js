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
      let newData = state.products.filter((p) => p.id !== action.payload);
      return {
        fetching: false,
        products: newData,
        error: false,
      };
    case FETCH_CREATE:
      return {
        fetching: false,
        products: [...state.products, action.payload],
        errors: false,
      };
    default:
      return state;
  }
}
