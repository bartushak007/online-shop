import React from 'react';
import StyleProductsListToggle from './StyleProductsListToggle';
import Sort from './Sort';

const HomeHeader = () => {
  return (
    <header>
      <StyleProductsListToggle/>
      <Sort/>
    </header>
  )
}

export default HomeHeader;