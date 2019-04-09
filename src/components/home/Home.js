import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import { navLink } from 'react-router-dom';
import { fetchProducts } from '../../redux/actions/index';

const Home = ({products, loaded, fetchProducts}) => { 
  useEffect(() => {   
    setTimeout(() => {
      fetchProducts() 
    }, 3000) 
    
  }, [])
  
  return ( 
    <>
      <HomeHeader/>
      <div >
        {products.map( ({id}) => <h2 key={id}>{id}</h2>) }
      </div>    
    </>      
  );  
}

const mapStateToProps = state => ({
  products: state.products.products,
  loaded: state.products.loaded
})

export default connect(mapStateToProps,{ fetchProducts })(Home);