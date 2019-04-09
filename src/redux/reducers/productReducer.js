import { FETCH_PRODUCTS } from '../actions/types';

const initialState = { products: [], loaded: true };

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        loaded: false
      }
    }
    default:
      return state;
  } 
}