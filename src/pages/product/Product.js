import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { resolvePath } from '../../utils';

const Product = ({ match, products,loading }) => {
  const { id } = match.params;
  const { img, title, company, info } = products[id - 1];

  return (<>
    {loading ? (
      <div>Loading</div>
    ) : (
    <div className="product">
      <div>        
        <img src={resolvePath('/' + img)} alt={title} />        
      </div>
      <div>
        <h2>{title}</h2>
        <div className="product__content">
          <b>Company name: </b>
          <span>{company}</span>
        </div>
        <div className="product__content">
          <b>Discription: </b>
          <span>{info}</span>
        </div>        
      </div>
    </div>
    )}</>
  )
}

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading,
})

export default connect(mapStateToProps)(Product);

