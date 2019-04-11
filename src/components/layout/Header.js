import React from 'react';
import CardsIcon from '../CardsIcon';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Header = props => {
  return (
    <header className="header">
      <h1>
        <FontAwesomeIcon icon={faReact}/>
        <NavLink className="header__title-nav" to="/">Online shop</NavLink>
      </h1>
      <CardsIcon/>
    </header>
  )
} 

export default Header;