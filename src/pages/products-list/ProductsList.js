import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import { NavLink } from 'react-router-dom';
import { fetchProducts } from '../../redux/actions/index';

const ProductsList = ({ products, loading, fetchProducts }) => {
  useEffect(() => {
    setTimeout(() => {
      fetchProducts();
    }, 0);
  }, []);

  return (
    <>
      <HomeHeader />
      <div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <>
            {products.map(({ id, title }) => {
              return (
                <div key={id}>
                  <h2 >{title}</h2>
                  <NavLink to={`/product/${id}`}>{title}</NavLink>
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