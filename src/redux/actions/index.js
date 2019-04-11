import { FETCH_PRODUCTS, LOADING, CHANGE_STYLE } from './types';
import { resolvePath } from '../../utils';
import store from '../store';

export const loading = () => ({
  type: LOADING,
  payload: true,
});

export const fetchProducts = () => dispatch => {  
  fetch(resolvePath('/data.json'))
    .then(resp => resp.json())
    .then( products => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,        
      });
      dispatch(loading());
    });
}

export const changeStyle = () => dispatch => {  
  dispatch({
    type: CHANGE_STYLE,    
  });  
};
