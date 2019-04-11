import React from 'react';
import Toggle from './Toggle';
import Sort from './Sort';

const HomeHeader = () => {
  return (
    <header className="products-list-header">
      <Toggle/>
      <Sort/>
    </header>
  )
}

export default HomeHeader;