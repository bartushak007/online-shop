import React from 'react';
import Cards from '../Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Header = props => {
  return (
    <header>
      <div>
      Icon: <FontAwesomeIcon icon={faReact} />
      </div>
      <Cards/>
    </header>
  )
} 

export default Header;