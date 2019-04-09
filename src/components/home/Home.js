import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';

import { fetchProducts } from '../../redux/actions/index';

const Home = props => { 
  useEffect(() => {   
    setTimeout(() => {
      props.fetchProducts() 
    }, 3000) 
    
  }, [])
  
  return ( 
      <>
        <HomeHeader/>
        <div className="App">
          hell
        </div>    
      </>   
      
  );  
}

export default connect(null,{ fetchProducts })(Home);