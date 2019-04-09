import { FETCH_PRODUCTS } from './types';
import { resolvePath } from '../../utils';

export const fetchProducts = () => dispatch => {  
  
  fetch(resolvePath('/data.json'))
    .then(resp => resp.json())
    .then( products => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,        
      })
    })
}