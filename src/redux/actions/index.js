import { FETCH_PRODUCTS, LOADING } from './types';
import { resolvePath } from '../../utils';

export const loading = () => ({
  type: LOADING,
});

export const fetchProducts = () => dispatch => {  
  dispatch(loading());
  
  fetch(resolvePath('/data.json'))
    .then(resp => resp.json())
    .then( products => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,        
      })
    })
}