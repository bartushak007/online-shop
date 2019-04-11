import { FETCH_PRODUCTS, LOADING, CHANGE_STYLE } from '../actions/types';

const initialState = { products: [], loading: false, toggle: true };

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        
      }
    }
    case LOADING: {
      return {
        ...state,
        loading: action.payload,        
      }
    }
    case CHANGE_STYLE: {      
      return {
        ...state,
        toggle: !state.toggle,        
      }
    }
    default:
      return state;
  } 
}