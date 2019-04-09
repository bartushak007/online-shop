import React from 'react';
import Cards from '../Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Header = props => {
  return (
    <header className="header">
      <h1>
        <FontAwesomeIcon icon={faReact}/>
        Online shop
      </h1>
      <Cards/>
    </header>
  )
} 

export default Header;