import React from 'react';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { resolvePath } from '../../utils';

const Product = ({ match, products,loading }) => {
  const { id } = match.params;
  
  const CallProduct = () => {
    const { img, title, company, info, price } = products[id - 1];

    return (
      <div className="product">
        <div className="product__img">        
          <img src={resolvePath('/' + img)} alt={title} />        
        </div>
        <div className="product__discription">
          <h2>{title}</h2>
          <div className="product__content">
            <b>Company name: </b>
            <span>{company}</span>
          </div>
          <div className="product__content">
            <b>Discription: </b>
            <span>{info}</span>
          </div>
          <div className="product__content">
            <b>Price: </b>
            <span>{price}$</span>
          </div>          
        </div>
      </div>
    )
  }
  return (
    <>
      {loading ? (
        <CallProduct/>     
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading,
})

export default connect(mapStateToProps)(Product);

