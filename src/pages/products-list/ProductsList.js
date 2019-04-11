import React from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import { NavLink } from 'react-router-dom';
import { fetchProducts } from '../../redux/actions/index';
import { resolvePath } from '../../utils';

const ProductsList = ({ products, loading }) => {  
  return (
    <>
      <HomeHeader />
      <div className="goods-list">
        {!loading ? (
          <div>Loading</div>
        ) : (
          <>
            {products.map(({ id, title, img, price }) => {
              return (
                <div className="goods-list__item" key={id}>
                  <div className="goods-list__img-container">
                    <img className="goods-list__img" src={resolvePath(`/${img}`)}/>                    
                  </div>
                  <div className="goods-list__title-container">
                    <h2 className="goods-list__title">{title}</h2>
                    <button className="goods-list__button"><NavLink className="goods-list__nav-link" to={`/product/${id}`}>Go to</NavLink></button>
                    <span className="goods-list__price">
                      <b>Price: </b>
                      <span>{price}$</span>
                    </span>
                  </div>
                </div>
              )
            })}
          </>
        )}
      </div>      
    </>
  );
}

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading
})

export default connect(mapStateToProps, { fetchProducts })(ProductsList);