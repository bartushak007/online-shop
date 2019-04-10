import React from 'react';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Cards = props => {
  return <div className="header__basket"><FontAwesomeIcon className="header__basket-svg" icon={faShoppingBasket}/></div>  
}

export default Cards;